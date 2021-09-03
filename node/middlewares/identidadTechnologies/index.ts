
export async function sendSMS(ctx: Context, next: () => Promise<any>) {



    const {
  
        clients: { identidadTechnologies: identidadTechnologies },
    
      } = ctx
    
      ///sendNotification?prevStatus=No%20Definido&nexStatus=Rechazado&destPhone=573502129658&orderid=898987788-8989898 
    const url = ctx.url.split("?")[1]
    const data = url.split("&")
    const params:any = []
    for(var i= 0;i<data.length;i++)
    {
        let cad = data[i].split("=")
        params[cad[0]]=cad[1].replace("%20", " ")
    }
    

    await identidadTechnologies.sendSMS(params.orderid, params.prevStatus,params.nextStatus,params.destPhone)
    
    
    await next()
   
   

}