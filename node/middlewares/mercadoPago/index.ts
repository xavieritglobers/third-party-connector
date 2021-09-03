
export async function refundMP(ctx: Context, next: () => Promise<any>) {



    const {
  
        clients: { mercadoPago: mercadoPago },
    
      } = ctx
    
    
    const url = ctx.url.split("?")[1]

    const data = url.split("&")
    const params:any = []
    for(var i= 0;i<data.length;i++)
    {
        let cad = data[i].split("=")
        params[cad[0]]=cad[1].replace("%20", " ")
    }

   
    
    await mercadoPago.refundMP(params['id'],params['amount'])
    
    await next()
   
   

}