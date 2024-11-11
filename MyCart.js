import Header from "./Header"
import * as React from 'react';
import { useState,useEffect } from 'react';
import { serverURL, getData, postData  } from "../../../services/FetchNodeAdminServices";
import { Divider } from '@mui/material';
import ProductsScroll from '../homepage/ProductsScroll';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Your Cart',
    'Order Review',
    'Payment',
  ];



export default function MyCart()
{
    
          const [popularProducts,setPopularProducts]=useState([]);
          const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.up("sm"));
        const md_matches = useMediaQuery(theme.breakpoints.up("md"));
        const [overState,setOverState]=useState('#b5b5b5')
        const [value,setValue]=useState(1)


var data=[{ productdetailname:'Maaza Mango Drink ', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
            offerprice:0, offertype:'Festival', productstatus:'Trending', picture:'maaza.webp'},
   { productdetailname:'Maggi 2-Minute Masala Noodles', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:420, 
            offerprice:390, offertype:'Festival', productstatus:'Trending', picture:'maggi.webp'},
    { productdetailname:'Britannia Nutri Choice Hi-Fibre Digestive Biscuits', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
           offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'britanniabisckit.webp'},
   { productdetailname:'Kissan Fresh Tomato Ketchup', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
          offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'tamatoshoop.jpg'},
   { productdetailname:'Cadbury Dairy Milk Chocolate Home Treats', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
            offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'chocolate.webp'},
  { productdetailname:'Brooke Bond Red Label Strong Blend Tea', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
           offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'redtea.webp'},
  { productdetailname:'Wagh Bakri Premium Leaf Tea ', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
            offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'waghbakri.webp'},
  { productdetailname:'Kelloggs Fruit, Nut & Seeds Muesli', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
             offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'kellogg.webp'},
   { productdetailname:'Brooke Bond Taj Mahal Tea', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
             offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'tajchai.webp'}

       ]

const showImages = (i) => {
          
              var op=parseInt(((data[i].price-data[i].offerprice)/data[i].price)*100)
           

    const handlePlus=()=>{
                 var v=value
                  v++
                  setValue(v)
              }
          
    const handleMinus=()=>{
                 var v=value
                  v--
                  setValue(v)
              }
          
          
            return ( 
                <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{marginLeft:20,marginTop:20,alignSelf:'flex-start',height:matches?180:80}}>
                  <img src={`${serverURL}/images/${data[i].picture}`} style={{ width:md_matches?100:matches?'60%':'50%' , borderRadius:15}} />
                </div>
           
          <div style={{height:115,width:400,marginLeft:20}}>
                  <div style={{
                    marginTop:15,
                     fontWeight: 500,
                     fontSize: 14,
                     letterSpacing: -0.07,
                     lineHeight: 1.4285714286,
                      width:'70%', 
                      overflow: "hidden",
                      textOverflow: 'ellipsis',
                      display:"-webkit-box",
                      webkitLineClamp: matches?"2":"1",
                      webkitBoxOrient: "vertical",
                      }}>
          
                 {data[i].productdetailname}
                  </div>
                    {data[i].productdetailname.length<=24?<div style={{ lineHeight: 1.2456,}}>&nbsp;</div>:<></>}
          
                  <div style={{
                     fontWeight: 500,
                     fontSize: 14,
                     letterSpacing: -0.07,
                     lineHeight: 1.4285714286,
                     }}>
          
                      {data[i].weight} {data[i].weighttype}
                     </div>
                     {data[i].offerprice>0 ? <div style={{marginTop:7,display:'flex',flexDirection:'column'}}>
                     <div style={{
                     fontWeight: 700,
                     fontSize: 14,
                     letterSpacing: -0.07,
                     lineHeight: 1.4285714286,
                     }}>
          
                 <span>&#8377;</span> {data[i].offerprice} 
                     </div>
          
                     <div style={{
                     fontWeight: 500,
                     fontSize: 14,
                     letterSpacing: -0.07,
                     lineHeight: 1.4285714286,
                     color:'grey'
                     }}>
          
                    <div style={{display:'flex',alignItems:'center',fontSize: 13}}><s><span>&#8377;{data[i].price}</span></s><span style={{margin:5,width:55,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:2,background:'#e5f7ee',color:'#03753c'}}>{op}% OFF</span></div>
                     </div>
                     
                     </div>:<div>
                     <div style={{
                      marginTop:7,
                     fontWeight: 700,
                     fontSize: 14,
                     letterSpacing: -0.07,
                     lineHeight: 1.4285714286,
                 
                     }}>
          
                     <span>&#8377;</span> {data[i].price}
                     </div>
                     <div style={{ lineHeight:1.6285714286,}}>&nbsp;</div>
                     </div>
                     }
          </div>
                    <div style={{marginTop:100,width:100,marginLeft:40}}>
                     <div style={{marginTop:20,marginBottom:8,display:'flex',justifyContent:'space-between',alignItems:'center',width:100,height:20,color:'#1f3d4c',fontSize:16,fontWeight:'bold'}}>
                      <div onClick={handleMinus} style={{cursor:'pointer',marginTop:8,display:'flex',justifyContent:'center',alignItems:'center',width:30,height:30,border:`0.7px solid ${overState}`,color:'#1f3d4c',fontSize:16,fontWeight:'bold',borderRadius:17.5}}><RemoveIcon/></div>
                      <div>{value}</div>
                      <div onClick={handlePlus} style={{cursor:'pointer',marginTop:8,display:'flex',justifyContent:'center',alignItems:'center',width:30,height:30,border:`0.7px solid ${overState}`,color:'#1f3d4c',fontSize:16,fontWeight:'bold',borderRadius:17.5}}><AddIcon/></div>
                      </div>
                    </div>        
                </div>
                )
            }
          
        
    
const fatchAllProductDetails=async(productstatus)=>{
                         var result=await postData('userInterface/display_all_productdetail_by_status',{productstatus})
                         setPopularProducts(result.data)
       }


useEffect(function(){
        fatchAllProductDetails('Popular');
    },[])
    


return(<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
               
            <div>
               <Header />
            </div>
 
             <div style={{marginLeft:105,marginTop:35,fontWeight: 900,textTransform: 'none',fontSize: '1.5rem',letterSpacing: -.72,lineHeight: 1.166666666}}>
               My Cart
             </div>
             
             <div style={{display:'flex',flexDirection:'row',}}>
             <div style={{display:'flex',flexDirection:'column',}}>
                <div style={{display:'inline-block',marginLeft:100,marginTop:10,borderRadius:24,border:'1px solid #e0e0e0',width:700,height:'auto'}}>
                       <div style={{marginLeft:25,marginTop:20,alignItems:'center',display:'flex',width:650}}>
                        <span style={{fontWeight: 700,fontSize: 18,letterSpacing: -.72,lineHeight: 1.166}}>Hyperlocal Basket</span><span>(1)</span><span style={{marginLeft:'auto',fontWeight: 700,fontSize: 18,letterSpacing: -.72,lineHeight: 1.166}}>&nbsp;total :&#8377;{}</span>
                       </div>
                       <div>
                       {showImages(1)}
                       </div>
                       <div style={{ marginBottom: 1, marginLeft: 35, width: 630, marginTop: 4 }}>
                         <Divider />
                        </div>
                 </div>
                 <div style={{display:'inline-block',marginLeft:100,marginTop:10,borderRadius:24,border:'1px solid #e0e0e0',width:700,height:'auto'}}>
                       <div style={{marginLeft:25,marginTop:20,alignItems:'center',display:'flex',width:650}}>
                        <span style={{fontWeight: 700,fontSize: 18,letterSpacing: -.72,lineHeight: 1.166}}>Scheduled Delivery Basket</span><span>(1)</span><span style={{marginLeft:'auto',fontWeight: 700,fontSize: 18,letterSpacing: -.72,lineHeight: 1.166}}>&nbsp;total :&#8377;{}</span>
                       </div>
                       <div>
                       {showImages(1)}
                       </div>
                       <div style={{ marginBottom: 1, marginLeft: 35, width: 630, marginTop: 4 }}>
                         <Divider />
                        </div>
                 </div>
             </div>
               
             <div style={{display:'flex',flexDirection:'column',}}>
             <div style={{borderRadius:24,backgroundColor:'#C5DEB8',display:'flex',justifyContent:'center',alignItems:'center',width:400, height:100,marginLeft:20}}>
             <Box sx={{ width: '100%',height:50 }}>
                <Stepper activeStep={0} alternativeLabel>
                 {steps.map((label) => (
                   <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                 </Step>
                    ))}
               </Stepper>
             </Box>
             </div>

             <div style={{display: 'flex',flexDirection:'column',marginTop:8,marginLeft:200,borderRadius:24,border:'1px solid #e0e0e0',display:'flex',justifyContent:'flex-start',width:370, height:120,marginLeft:20,marginTop:15,padding:15}}>
              <div style={{display: 'flex',alignItems:'center',}}><img src="/bank.jpg" style={{marginRight:8,display:'block',width:24,height:24}}/>
               <div style={{display: 'flex',flexDirection:'column'}}>
                    <div style={{  fontWeight: 700, fontStyle: 'calibari', fontSize: 14,  letterSpacing: -0.07, lineHeight: 1.4,}}>Apply Coupon </div>
                    <div style={{  width:250,fontWeight: 500, fontStyle: 'calibari', fontSize: 12,  overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',letterSpacing: -0.08, lineHeight: 1.5,color:'rgba(0, 0, 0, .65)'}}>
                    Login to see best offers & promotions  </div>
                </div>
                <div style={{alignSelf:'flex-end',marginLeft:50}}><ArrowForwardIosIcon style={{blockSize:'1rem',stroke: '#0c5273',strokeWidth: 2.5,color:'#0c5273'}}/></div>
              </div>
                  <div style={{display: 'flex',justifyContent:'center',alignItems:'center',borderRadius:24,border:'1px solid #e0e0e0',width:300, height:20,marginLeft:20,marginTop:15,padding:15,fontSize:'1rem',fontWeight:900,color:'#0c5273'}}>Log-in</div>
                </div> 

          
             <Box  style={{position:'relative',padding: 16,borderRadius: 24,border: '1px solid #e0e0e0',overflow: 'hidden',marginLeft:21,marginTop:40}}>
                     
                        <div style={{marginTop:12,display: 'flex',alignItems: 'center',clear: 'both',paddingLeft:5,fontWeight: 800,fontSize: '1rem',letterSpacing: -0.48,lineHeight: 1.25,color:'#141414',webkitFontSmoothing: 'antialiased'}}>
                        Payment Details</div>

                        <div style={{ paddingLeft:8, marginTop: 12,fontWeight: 500,fontSize: 17 ,letterSpacing: -0.07,lineHeight: 1.4285714286, display: 'flex',justifyContent:'space-between',color: 'rgba(0, 0, 0, .65)',cursor: 'pointer',position: 'relative'}}>
                            <div>MRP Total</div>
                             <div style={{color:'#141414',fontWeight:700}}>&#8377; 4546&nbsp;&nbsp;&nbsp;</div>
                        </div>
                      
                       <Divider style={{width:'100%',marginTop:10,marginBottom:10}} />
                        
                       <div style={{ paddingLeft:8, marginTop: 12,fontWeight: 500,fontSize: 17 ,letterSpacing: -0.07,lineHeight: 1.4285714286, display: 'flex',justifyContent:'space-between',color: 'rgba(0, 0, 0, .65)',cursor: 'pointer',position: 'relative'}}>
                            <div>Product Discount</div>
                             <div style={{color:'green',fontSize:17,fontWeight:700}}>&#8377;356&nbsp;&nbsp;&nbsp;</div>
                        </div>

                       <Divider style={{width:'100%',marginTop:10,marginBottom:10}} />
                            
                       <div style={{ paddingLeft:8, marginTop: 12,fontWeight: 500,fontSize: 17 ,letterSpacing: -0.07,lineHeight: 1.4285714286, display: 'flex',justifyContent:'space-between',color: 'rgba(0, 0, 0, .65)',cursor: 'pointer',position: 'relative'}}>
                            <div>Delivery Fee (Hyperlocal)</div>
                             <div style={{color:'green',fontSize:17,fontWeight:700}}>FREE&nbsp;&nbsp;</div>
                        </div>
                       <Divider style={{width:'100%',marginTop:10,marginBottom:10}} />
                       
                       <div style={{ paddingLeft:8, marginTop: 12,fontWeight: 500,fontSize: 17 ,letterSpacing: -0.07,lineHeight: 1.4285714286, display: 'flex',justifyContent:'space-between',color: 'rgba(0, 0, 0, .65)',cursor: 'pointer',position: 'relative'}}>
                            <div style={{width:200}}>Delivery Fee (Scheduled Delivery)</div>
                             <div style={{color:'green',fontSize:17,fontWeight:700}}>FREE&nbsp;&nbsp;</div>
                        </div>
                          
                         <Divider style={{width:'100%',marginTop:10,marginBottom:10}} />
                       
                         <div style={{ paddingLeft:8, marginTop: 12,fontWeight: 500,fontSize: 17 ,letterSpacing: -0.07,lineHeight: 1.4285714286, display: 'flex',justifyContent:'space-between',color: 'rgba(0, 0, 0, .65)',cursor: 'pointer',position: 'relative'}}>
                            <div>Total</div>
                            <div style={{display:'flex',flexDirection:'column'}}>
                             <div style={{color:'#141414',fontWeight:700,marginLeft:50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8377;5246&nbsp;&nbsp;</div>
                             <div style={{color:'green',fontWeight:700}}>You Saved &#8377;2158&nbsp;&nbsp;</div>
                             </div>
                        </div>
                  </Box>
              
                  <div style={{marginLeft: 22,cursor:'pointer',marginTop:20,display:'flex',justifyContent:'center',alignItems:'center',width:400,height:50,border:`0.7px solid #b5b5b5`,color:'#fff',background:'#2e86de',fontSize:16,fontWeight:'bold',borderRadius:25}}>
                  Place Order 
                   </div>

             </div>
             </div>

          

             <div style={{backgroundColor: '#f5f6fa',borderRadius:40,border:'1px #f5f6fa', marginBottom: 8, marginLeft: 100, width: '83%',height:1, marginTop: 30 }}>
                <Divider />
             </div>

           <div style={{width:'82%',alignSelf:'center',marginTop:40,marginBottom:20}}>
                <ProductsScroll title={<div style={{fontSize:'1rem',fontWeight:800,letterSpacing:-0.48,lineHeight:1.25}}>Top Deals</div>} data={popularProducts} />
           </div>




    </div>)
}
