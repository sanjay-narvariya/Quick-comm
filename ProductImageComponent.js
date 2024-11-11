import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import { serverURL, postData } from "../../../services/FetchNodeAdminServices";
import AddToCart from './AddToCart';
import { Avatar, Divider, Grid, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from "react";



export default function ProductImageComponent({product}) {

  const [index, setIndex] = useState(0)
  var scrollRef = useRef()
  var settings = {
    dots: false,
    infinite: true,
    spaceBetween: 24,
    // autoplay: true,
    // autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    // afterChange: () => setIndex(index + 1),
    beforeChange: (current, next) => setIndex(next)
  };

  const [productImages,setProductImages]=useState([])
  const [selectedImages,setSelectedImages]=useState(product.picture)

  const fatchAllImages= async()=>{
       var response=await postData('userinterface/user_display_product_pictures',{productdetailid:product?.productdetailid})
       // alert(JSON.stringify(response?.data))
       setProductImages(response?.data[0]?.filenames?.split(","))
  }

useEffect(()=>{
   fatchAllImages()
 },[])


const handleImage=(item)=>{
        setSelectedImages(item)
   }


  const showImage = () => {
    return productImages.map((item, i) => {
      return <div>
        <img onClick={()=>handleImage(item)} src={`${serverURL}/images/${item}`} style={{ width: '60%', borderRadius: 20, border: '1px solid #e0e0e0', padding: 6, }} />
      </div>
    })
  }


  const handleNext = () => {
    scrollRef.current.slickNext()

  }

  const handlePrev = () => {
    scrollRef.current.slickPrev()
  }
  

  const showImages = () => {

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', }}>

        <div >
          <img src={`${serverURL}/images/${selectedImages}`} style={{ height: 450, width: "95%" }} />
        </div>

        <div style={{ marginLeft: 60 }}>
          <AddToCart />
        </div>
      </div>
    )

  }


  return (
  
    <div style={{ marginLeft: 20, display: 'flex', marginTop: 40, position: 'relative' }}>

      <div onClick={handleNext} style={{ cursor: 'pointer', marginLeft: 80, marginBottom: 50, marginTop: 5, position: 'absolute', zIndex: 1, background: '#fff', width: 80, height: 35, verticalAlign: 'top', transition: 'cubic-bezier(0.35, 0, 0.25, 1) 300ms', borderRadius: 22, border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardArrowUpIcon style={{ color: '#0c5273' }} />
      </div>

      <div elevation={0.5} style={{marginLeft:80}} >
        <Slider ref={scrollRef} {...settings} style={{ position: 'relative', objectFit: 'contain', marginTop: 35, paddingTop: 15, overflow: 'hidden', width: 100, }}>
          {showImage()}
        </Slider>
      </div>

      <div onClick={handlePrev} style={{ cursor: 'pointer', marginLeft: 80, marginTop: 380, position: 'absolute', zIndex: 1, background: '#fff', width: 80, height: 35, transition: 'cubic-bezier(0.35, 0, 0.25, 1) 300ms', borderRadius: 22, border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardArrowDownIcon style={{ color: '#0c5273' }} />
      </div>


      <Paper elevation={0.5} style={{ position: 'relative', marginLeft:10, borderRadius: 24, border: '1px solid #e0e0e0', overflow: 'hidden' ,height:550}}>

        <Slider style={{ display: 'flex', justifyContent: 'center', marginLeft: -5, height: 500, width:400}} >
          {showImages()}
        </Slider>

      </Paper>
     
     
      </div>
     
      

   
  )
}