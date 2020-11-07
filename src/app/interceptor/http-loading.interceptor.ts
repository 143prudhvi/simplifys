import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {catchError, delay, finalize, map, retry, retryWhen, take, tap} from 'rxjs/operators';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private loadingCtrl:LoadingController,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        this.loadingCtrl.getTop().then(hasLoading => {
            if(!hasLoading){
                this.loadingCtrl.create({
                    spinner:'lines',
                    message:'PleaseWait...',
                    translucent: true,
                    backdropDismiss:true,
                    duration:2000,
                    animated:true
                }).then(loading => loading.present());
            }
        });
        return next.handle(request).pipe(
            // retryWhen(err =>{
            //     let retries= 1;
            //     return err.pipe(
            //         delay(1000),
            //         take(1),
            //         tap(()=>{
            //             this.showRetryToast(retries)
            //         }),
            //         map(error => {
            //             if(retries++ === 3){
            //                 throw error;
            //             }
            //             return error;
            //         })
            //     )
            // }),
            // catchError(err =>{
            //     console.log('error: ',err);
            //     this.presentFailedAlert(err.error['msg']);
            //     return EMPTY
            // }),
            finalize(()=>{
                    this.loadingCtrl.getTop().then(hasLoading => {
                            if(hasLoading){
                                console.log('dismis');
                                this.loadingCtrl.dismiss();
                            }
                    });
            })
        );
    }


    async showRetryToast(retryCount){
        const toast = await this.toastCtrl.create({
            message: `Retry: ${retryCount}/3`,
            duration:1000
        });
        toast.present();
    }

    async presentFailedAlert(msg){
        const alert = await this.alertCtrl.create({
            header:'Oops',
            message:msg,
            buttons:['OK']
        });
        await alert.present();
    }

}