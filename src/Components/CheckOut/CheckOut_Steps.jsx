import Customer_Info from "./Customer_Info";

 export  const CheckOut_Steps=[
    {
        name:"Customer information",
        Component:()=><Customer_Info/>,
    },
    {
        name:"Payment information",
        Component:()=><div>Shopping details</div>,
    },
   
    {
        name:"Payment information",
        Component:()=><div>Delivered details</div>,
    }
]