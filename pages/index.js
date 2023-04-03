import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layouts from "@/components/Layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="css/animate.min.css" />
  <link rel="stylesheet" type="text/css" href="css/bootstrap-submenu.css" />
  <link rel="stylesheet" type="text/css" href="css/bootstrap-select.min.css" />
  <link rel="stylesheet" type="text/css" href="css/magnific-popup.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/font-awesome/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/flaticon/font/flaticon.css"
  />
  <link rel="stylesheet" type="text/css" href="fonts/linearicons/style.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="css/jquery.mCustomScrollbar.css"
  />
  <link rel="stylesheet" type="text/css" href="css/dropzone.css" />
  <link rel="stylesheet" type="text/css" href="css/slick.css" />
  <link rel="stylesheet" type="text/css" href="css/lightbox.min.css" />
  <link rel="stylesheet" type="text/css" href="css/jnoty.css" />
  {/* Custom stylesheet */}
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link
    rel="stylesheet"
    type="text/css"
    id="style_sheet"
    href="css/skins/red.css"
  />
  {/* Favicon icon */}
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
  {/* Google fonts */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800%7CPlayfair+Display:400,700%7CRoboto:100,300,400,400i,500,700"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="css/ie10-viewport-bug-workaround.css"
  />


    

      <Layouts>Home</Layouts>

<script  src="js/ie-emulation-modes-warning.js"></script>
<script src="js/jquery-2.2.0.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script  src="js/bootstrap-submenu.js"></script>
<script  src="js/rangeslider.js"></script>
<script  src="js/jquery.mb.YTPlayer.js"></script>
<script  src="js/bootstrap-select.min.js"></script>
<script  src="js/jquery.easing.1.3.js"></script>
<script  src="js/jquery.scrollUp.js"></script>
<script  src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script  src="js/dropzone.js"></script>
<script  src="js/slick.min.js"></script>
<script  src="js/jquery.filterizr.js"></script>
<script  src="js/jquery.magnific-popup.min.js"></script>
<script  src="js/jquery.countdown.js"></script>
<script  src="js/jquery.mousewheel.min.js"></script>
<script  src="js/lightgallery-all.js"></script>
<script  src="js/jnoty.js"></script>
<script  src="js/app.js"></script>
    </>
  );
}
