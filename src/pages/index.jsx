import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.sass'
import { upload, download, add, read, finalData} from '../../lib/firebase'
import { useState, useRef, useEffect } from 'react'

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let posts = await read()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default function Home({posts}) {

  let fileRef = useRef(null)
  let downloadRef = useRef()
  const [href, setHref] = useState()
  const [name, setName] = useState("")
  const [file, setFile] = useState(" ")
  const [searchList, setList] = useState()
  const [url, setUrl] = useState(" ")
  const [isUrl, setisUrl] = useState(false)
  
  // let data = await read()


  const uploadFile = (e) => {

    // setName(e.target.value.replace(/.*[\/\\]/, ''))
    let name = e.target.value.replace(/.*[\/\\]/, '')
    console.log(name)
    // console.log(other)
    
    upload(e.target.files[0], name);
    // add(name, )
    // console.log(download(name))
  }
  
  const downloadFile = async(e) => {
    let the = await download("sug pdf.rtf")
    setHref(the)
    // console.log(download("sug pdf.rtf"))
    // console.log(href, "effect")

  }
  const search = async (e) =>{
    console.clear()

    for (let i = 0; i < posts.length; i++) {
      if (e.target.value != ""){

        let isThere = posts[i].name.search(e.target.value)
        
        if (isThere != -1 ){
          setUrl(posts[i].url)
          console.log(posts[i])
        }
      }
      
    }
    setisUrl(true)
    // console.log(ait)

    // console.log(posts)
   
  }
 

  return (
    <>
      <Head>
        <title>ATBU - Backyard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.fav} onClick={ search } onLoad={ () => console.log("hello")} >
          <svg viewBox="0 0 367 163.75" preserveAspectRatio="xMidYMid meet" className="css-g5ufxp" id="ggccbfag"><defs id="SvgjsDefs1001"></defs><g id="SvgjsG1007" featurekey="symbolContainer" transform="matrix(2.5560852997962904,0,0,2.5560852997962904,20.000018816163152,20.010667775572305)" fill="#111"><path xmlns="http://www.w3.org/2000/svg" d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"></path></g><g id="SvgjsG1008" featurekey="monogramFeature-0" transform="matrix(2.12422955412645,0,0,2.12422955412645,51.74738035741598,10.884758010358027)" fill="#fff"><path d="M8.886 53.265 c-0.8448 0 -1.5294 -0.6858 -1.5294 -1.5306 l0 -26.608 c0 -0.8436 0.32162 -1.401 1.0518 -1.8234 l11.077 -6.4026 c0.7308 -0.4224 1.3746 -0.4224 2.1054 0 l5.2511 3.0354 c0.7302 0.4224 1.0518 0.9798 1.0518 1.8234 l0 29.975 c0 0.8448 -0.6852 1.53 -1.53 1.53 s-1.53 -0.6852 -1.53 -1.53 l0 -29.425 l-4.296 -2.4834 l-10.121 5.8506 l0 26.057 c0 0.8448 -0.6852 1.53 -1.53 1.53 z M8.8866 59.99941406 c-0.28799 0 -0.5574 -0.078048 -0.7878 -0.21662 l-5.5158 -3.1884 c-0.7302 -0.4224 -1.0518 -0.9798 -1.0518 -1.8234 l0 -33.01 c0 -0.8436 0.32162 -1.401 1.0518 -1.8234 l5.5158 -3.1884 c0.23039 -0.13858 0.49981 -0.21838 0.7878 -0.21838 c0.8448 0 1.53 0.6852 1.53 1.53 c0 0.57598 -0.31858 1.0776 -0.78894 1.3386 l-5.037 2.9112 l0 31.909 l5.037 2.9112 c0.47039 0.26098 0.78894 0.7626 0.78894 1.3386 c0 0.8448 -0.6852 1.53 -1.53 1.53 z M14.713 60.0011719 c-0.8448 0 -1.5294 -0.68586 -1.5294 -1.5307 l0 -16.505 c0 -0.8436 0.32162 -1.401 1.0518 -1.8234 l5.5314 -3.2016 c0.24117 -0.13922 0.50396 -0.20519 0.76374 -0.20519 c0.52858 0 1.0428 0.27422 1.326 0.765 c0.13922 0.24117 0.20519 0.50396 0.20519 0.76374 l0.0072072 16.839 c0 0.8448 -0.6852 1.53 -1.53 1.53 s-1.53 -0.6852 -1.53 -1.53 l0 -14.186 l-2.766 1.599 l0 15.955 c0 0.8448 -0.6852 1.53 -1.53 1.53 z M14.713 36.428 c-0.8448 0 -1.5294 -0.68586 -1.5294 -1.5307 l0 -6.4026 c0 -0.8436 0.32221 -1.4004 1.0524 -1.8234 l5.5314 -3.2016 c0.24117 -0.13922 0.50396 -0.20519 0.76374 -0.20519 c0.52858 0 1.0428 0.27422 1.326 0.765 c0.13922 0.24117 0.20519 0.50396 0.20519 0.76374 l0.0072072 6.7368 c0 0.8448 -0.6858 1.53 -1.5306 1.53 s-1.53 -0.6852 -1.53 -1.53 l0 -4.0836 l-2.766 1.599 l0 5.8524 c0 0.8448 -0.6852 1.53 -1.53 1.53 z"></path></g><g id="SvgjsG1009" featurekey="nameFeature-0" transform="matrix(0.9507510906051891,0,0,0.9507510906051891,165.0984978187896,52.7742922554247)" fill="#111"><path d="M2 40 l0 -16.8 c0 -11.16 0 -15.56 6 -15.56 s6 4.4 6 15.56 l0 16.8 l-4 0 l0 -9.2 l-4 0 l0 9.2 l-4 0 z M6 27.6 l4 0 l0 -4.4 c0 -10.4 0 -12.36 -2 -12.36 s-2 1.96 -2 12.36 l0 4.4 z M18.4 11.600000000000001 l0 -3.6 l12 0 l0 3.6 l-4 0 l0 28.4 l-4 0 l0 -28.4 l-4 0 z M34.8 40 l0 -32 l6.08 0 c4.12 0 5.48 2.56 5.48 7.16 l0 0.84 c0 2.76 -0.64 4.92 -1.36 6.48 l0 0.16 c1.48 1.24 2.4 3.68 2.6 7.92 l0 1.28 c-0.32 5.64 -1.8 8.16 -5.92 8.16 l-6.88 0 z M38.8 21.6 l2.08 0 c1.12 0 1.92 -1.32 1.92 -5.6 l0 -0.84 c0 -3.08 -0.72 -3.96 -1.92 -3.96 l-2.08 0 l0 10.4 z M38.8 36 l2.88 0 c1.2 0 2.04 -1 2.2 -4.16 l0 -1.28 c-0.16 -4.76 -1 -5.76 -2.2 -5.76 l-2.88 0 l0 11.2 z M52.199999999999996 23.16 l0 -15.16 l4 0 l0 15.16 c0 11.56 0 13.24 2 13.24 s2 -1.68 2 -13.24 l0 -15.16 l4 0 l0 15.16 c0 12.8 0 17.24 -6 17.24 s-6 -4.44 -6 -17.24 z M80.8 40 l0 -32 l6.08 0 c4.12 0 5.48 2.56 5.48 7.16 l0 0.84 c0 2.76 -0.64 4.92 -1.36 6.48 l0 0.16 c1.48 1.24 2.4 3.68 2.6 7.92 l0 1.28 c-0.32 5.64 -1.8 8.16 -5.92 8.16 l-6.88 0 z M84.8 21.6 l2.08 0 c1.12 0 1.92 -1.32 1.92 -5.6 l0 -0.84 c0 -3.08 -0.72 -3.96 -1.92 -3.96 l-2.08 0 l0 10.4 z M84.8 36 l2.88 0 c1.2 0 2.04 -1 2.2 -4.16 l0 -1.28 c-0.16 -4.76 -1 -5.76 -2.2 -5.76 l-2.88 0 l0 11.2 z M98.4 40 l0 -16.8 c0 -11.16 0 -15.56 6 -15.56 s6 4.4 6 15.56 l0 16.8 l-4 0 l0 -9.2 l-4 0 l0 9.2 l-4 0 z M102.4 27.6 l4 0 l0 -4.4 c0 -10.4 0 -12.36 -2 -12.36 s-2 1.96 -2 12.36 l0 4.4 z M116 23.16 c0 -11.16 0 -15.56 5.6 -15.56 c4.12 0 5.24 2.52 5.52 8.56 l-3.72 0 c-0.16 -4.36 -0.6 -5.36 -1.8 -5.36 c-1.84 0 -1.84 1.96 -1.84 12.36 c0 11.56 0 13.24 1.84 13.24 c1.32 0 1.72 -1 1.8 -6.16 l3.76 0 c-0.24 7.4 -1.24 10.16 -5.56 10.16 c-5.6 0 -5.6 -4.44 -5.6 -17.24 z M131.96 40 l0 -32 l4 0 l0 12.68 l4 -12.68 l4 0 l-4.8 15.2 l4.8 16.8 l-4 0 l-4 -14 l0 14 l-4 0 z M146.76000000000002 8 l4 0 l2.4 12.32 l0.4 0 l2.4 -12.32 l4 0 l-4.6 18.08 l0 13.92 l-4 0 l0 -13.92 z M164.36 40 l0 -16.8 c0 -11.16 0 -15.56 6 -15.56 s6 4.4 6 15.56 l0 16.8 l-4 0 l0 -9.2 l-4 0 l0 9.2 l-4 0 z M168.36 27.6 l4 0 l0 -4.4 c0 -10.4 0 -12.36 -2 -12.36 s-2 1.96 -2 12.36 l0 4.4 z M182.36 40 l0 -32 l6.48 0 c4.12 0 5.52 2.52 5.52 7.36 c0 4.36 -0.52 6.84 -1.76 8.04 l0 0.24 c1.04 0.36 1.36 2.24 1.76 6.92 l0.8 9.44 l-4 0 l-0.52 -9.44 c-0.28 -4.76 -1 -5.76 -2.2 -5.76 l-2.08 0 l0 15.2 l-4 0 z M186.36 21.6 l2.48 0 c1.4 0 1.8 -1.4 1.8 -6.24 c0 -3.16 -0.6 -4.16 -1.8 -4.16 l-2.48 0 l0 10.4 z M200.36 40 l0 -32 l6 0 c6 0 6 4.4 6 15.16 c0 12.4 0 16.84 -6 16.84 l-6 0 z M204.36 36 l2 0 c2.24 0 2.24 -1.68 2.24 -12.84 c0 -10 0 -11.96 -2.24 -11.96 l-2 0 l0 24.8 z"></path></g><g id="SvgjsG1010" featurekey="sloganFeature-0" transform="matrix(1.4287686133528201,0,0,1.4287686133528201,167.11435647938777,94.05621500639253)" fill="#111"><path d="M7.24 14.8 c-0.01334 0.74666 -0.040038 1.4466 -0.080038 2.1 s-0.17666 1.2233 -0.41 1.71 s-0.60334 0.87 -1.11 1.15 s-1.2267 0.42 -2.16 0.42 c-0.65334 0 -1.2067 -0.09666 -1.66 -0.29 s-0.82 -0.46668 -1.1 -0.82002 s-0.48334 -0.78 -0.61 -1.28 s-0.19 -1.0567 -0.19 -1.67 l0 -7.2 c0 -0.65334 0.06666 -1.2333 0.2 -1.74 s0.35 -0.93332 0.65 -1.28 s0.69 -0.60666 1.17 -0.78 s1.0667 -0.26 1.76 -0.26 c0.84 0 1.4933 0.14334 1.96 0.43 s0.81666 0.67 1.05 1.15 s0.37668 1.03 0.43002 1.65 s0.08668 1.2633 0.10002 1.93 l-1.32 0 c0 -0.44 -0.0033398 -0.89334 -0.01 -1.36 s-0.07332 -0.89 -0.19998 -1.27 s-0.34666 -0.69334 -0.66 -0.94 s-0.77668 -0.37 -1.39 -0.37 c-0.46666 0 -0.85666 0.06666 -1.17 0.2 s-0.56 0.32668 -0.74 0.58002 s-0.30666 0.55334 -0.38 0.9 s-0.11 0.73332 -0.11 1.16 l0.04 7.3 c0 0.4 0.03 0.76334 0.09 1.09 s0.17 0.60666 0.33 0.84 s0.38334 0.41334 0.67 0.54 s0.65 0.19 1.09 0.19 c0.68 0 1.1867 -0.11666 1.52 -0.35 s0.56668 -0.54334 0.70002 -0.93 s0.20334 -0.82332 0.21 -1.31 s0.01 -0.98332 0.01 -1.49 l1.32 0 z M20.4805 20 l-1.4 0 l-1.06 -4.3 l-4.36 0 l-1.06 4.3 l-1.36 0 l4.06 -15 l1.14 0 z M17.680500000000002 14.36 l-1.78 -7.42 l-1.9 7.42 l3.68 0 z M30.461 6.460000000000001 l-3.1 0 l0 13.54 l-1.48 0 l0 -13.54 l-3.1 0 l0 -1.46 l7.68 0 l0 1.46 z M41.7415 14.8 c-0.01334 0.74666 -0.040038 1.4466 -0.080038 2.1 s-0.17666 1.2233 -0.41 1.71 s-0.60334 0.87 -1.11 1.15 s-1.2267 0.42 -2.16 0.42 c-0.65334 0 -1.2067 -0.09666 -1.66 -0.29 s-0.82 -0.46668 -1.1 -0.82002 s-0.48334 -0.78 -0.61 -1.28 s-0.19 -1.0567 -0.19 -1.67 l0 -7.2 c0 -0.65334 0.06666 -1.2333 0.2 -1.74 s0.35 -0.93332 0.65 -1.28 s0.69 -0.60666 1.17 -0.78 s1.0667 -0.26 1.76 -0.26 c0.84 0 1.4933 0.14334 1.96 0.43 s0.81666 0.67 1.05 1.15 s0.37668 1.03 0.43002 1.65 s0.08668 1.2633 0.10002 1.93 l-1.32 0 c0 -0.44 -0.0033398 -0.89334 -0.01 -1.36 s-0.07332 -0.89 -0.19998 -1.27 s-0.34666 -0.69334 -0.66 -0.94 s-0.77668 -0.37 -1.39 -0.37 c-0.46666 0 -0.85666 0.06666 -1.17 0.2 s-0.56 0.32668 -0.74 0.58002 s-0.30666 0.55334 -0.38 0.9 s-0.11 0.73332 -0.11 1.16 l0.04 7.3 c0 0.4 0.03 0.76334 0.09 1.09 s0.17 0.60666 0.33 0.84 s0.38334 0.41334 0.67 0.54 s0.65 0.19 1.09 0.19 c0.68 0 1.1867 -0.11666 1.52 -0.35 s0.56668 -0.54334 0.70002 -0.93 s0.20334 -0.82332 0.21 -1.31 s0.01 -0.98332 0.01 -1.49 l1.32 0 z M54.602 20 l-1.52 0 l-0.02 -6.8 l-4.8 0 l0.02 6.8 l-1.5 0 l0 -15 l1.5 0 l-0.02 6.78 l4.8 0 l0.02 -6.78 l1.52 0 l0 15 z M73.58299999999998 14.8 c-0.01334 0.74666 -0.040038 1.4466 -0.080038 2.1 s-0.17666 1.2233 -0.41 1.71 s-0.60334 0.87 -1.11 1.15 s-1.2267 0.42 -2.16 0.42 c-0.65334 0 -1.2067 -0.09666 -1.66 -0.29 s-0.82 -0.46668 -1.1 -0.82002 s-0.48334 -0.78 -0.61 -1.28 s-0.19 -1.0567 -0.19 -1.67 l0 -7.2 c0 -0.65334 0.06666 -1.2333 0.2 -1.74 s0.35 -0.93332 0.65 -1.28 s0.69 -0.60666 1.17 -0.78 s1.0667 -0.26 1.76 -0.26 c0.84 0 1.4933 0.14334 1.96 0.43 s0.81666 0.67 1.05 1.15 s0.37668 1.03 0.43002 1.65 s0.08668 1.2633 0.10002 1.93 l-1.32 0 c0 -0.44 -0.0033398 -0.89334 -0.01 -1.36 s-0.07332 -0.89 -0.19998 -1.27 s-0.34666 -0.69334 -0.66 -0.94 s-0.77668 -0.37 -1.39 -0.37 c-0.46666 0 -0.85666 0.06666 -1.17 0.2 s-0.56 0.32668 -0.74 0.58002 s-0.30666 0.55334 -0.38 0.9 s-0.11 0.73332 -0.11 1.16 l0.04 7.3 c0 0.4 0.03 0.76334 0.09 1.09 s0.17 0.60666 0.33 0.84 s0.38334 0.41334 0.67 0.54 s0.65 0.19 1.09 0.19 c0.68 0 1.1867 -0.11666 1.52 -0.35 s0.56668 -0.54334 0.70002 -0.93 s0.20334 -0.82332 0.21 -1.31 s0.01 -0.98332 0.01 -1.49 l1.32 0 z M87.42349999999999 20 l-1.72 -0.000019531 l-3.14 -6.06 l-2.6 0 l0 6.06 l-1.34 0 l0 -15 l3.44 0 c1.3733 0 2.46 0.39334 3.26 1.18 s1.2 1.8667 1.2 3.24 c0 0.42666 -0.05666 0.86 -0.17 1.3 s-0.27668 0.85334 -0.49002 1.24 s-0.47668 0.73666 -0.79002 1.05 s-0.67 0.55668 -1.07 0.73002 z M85.1035 9.32 c0 -0.46666 -0.08 -0.88664 -0.24 -1.26 s-0.38 -0.69 -0.66 -0.95 s-0.61334 -0.46 -1 -0.6 s-0.80666 -0.21 -1.26 -0.21 l-1.98 0 l0 6.26 l2.1 0 c1.0667 0 1.84 -0.28666 2.32 -0.86 s0.72 -1.3667 0.72 -2.38 z M99.48399999999998 16.12 c0 1.3333 -0.32336 2.3434 -0.97002 3.03 s-1.6433 1.03 -2.99 1.03 c-1.28 0 -2.2434 -0.36666 -2.89 -1.1 s-0.97 -1.72 -0.97 -2.96 l0 -11.12 l1.42 0 l0 11.06 c0 0.37334 0.05 0.72334 0.15 1.05 s0.25 0.61332 0.45 0.85998 s0.45 0.44 0.75 0.58 s0.65 0.21 1.05 0.21 c0.97334 0 1.65 -0.27 2.03 -0.81 s0.57 -1.2633 0.57 -2.17 l0 -10.78 l1.4 0 l0 11.12 z M111.90449999999998 20 l-7.8 0 l0 -1.98 l6.46 -11.54 l-6.46 0 l0 -1.48 l7.8 0 l0 1.98 l-6.42 11.54 l6.42 0 l0 1.48 z"></path></g></svg>
         </section>
        <section className={styles.form}>
          <input type="text" className={styles.input} placeholder='Search . . .' onChange={ search }/>
          <input type="file" placeholder='Search...' ref={fileRef} style={{display : "none"}} className={styles.input} value=''  onChange={uploadFile} />
          <input type="button" value="Download" className={ !isUrl ? styles.buttonA : styles.buttonB} onClick={() => downloadRef.current.click()}/>
          <a href={url} ref={downloadRef} hidden > go somewhere</a>
          <div>
            <span className='styles.splice'>or</span>
          </div>
          <input type="button" value="Upload" className={styles.buttonB} onClick={ () => fileRef.current.click()}/>
        </section>
        <p>
          { href ?  <a href={href}> click to download </a> : <a> </a>}

        </p>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756583337185960"
     crossorigin="anonymous" />
      </main>
    </>
  )
}
