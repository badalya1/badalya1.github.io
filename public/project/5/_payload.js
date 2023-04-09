export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:{"project-5":{data:{id:5,attributes:{name:"Portfolio",in_progress:c,start_date:"2023-01-27",end_date:a,description:"A portofolio website featuring the projects and blog posts that I have created and contributed to over the years. It is also a place where I can share my knowledge and skills with others. The website you are currently on is a testament to my dedication to my craft and my passion for creating beautiful and functional websites. It is an ever-evolving platform that I use to showcase the projects I have worked on, the blog posts I have written, and the skills I have acquired over the years. I am constantly striving to improve my work and to stay up to date with the latest trends and technologies.\n\nI am also constantly working to improve this portfolio website by regularly updating it with new projects and by adding new skills that I have learned. I strive to remain at the cutting edge of the latest web development trends and technologies, so that I can provide the best possible experience for my clients. Additionally, I am always open to feedback and suggestions on how I can further improve my portfolio website.\n\n## Challenges\n\nThe goal of this project is to utilize all free options provided to develop and host this website. Here's how the workflow works:\n1. Run a Strapi server and Nuxt app locally for development.\n2. Make necessary changes to the app and content in the Strapi dashboard.\n3. Generate a static site with a crawler and context extractor.\n4. Push all changes to the main branch of the Github repository.\n5. A Github action will check if the dist folder has been changed and copy the dist folder into a public repository.\n6. Another Github action in the public repo will deploy the changes to Github Pages.\n\n\nHowever, there are some additional problems that need to be addressed. The website contains images that need to be hosted somewhere. Uploading those images to Github will take a long time on steps 4 and 5. The solution is to use a Strapi provider to upload the files to the Interplanetary File System using [Filebase](https:\u002F\u002Ffilebase.com) or [Pinata](https:\u002F\u002Fapp.pinata.cloud\u002F). Then, we can keep the CID of each image and use Cloudflare endpoints to request each image. This works perfectly for free, except that Cloudflare might block requests with status `429 Too many requests` if the user navigates to pages that contain many images.",completion:80,links:a,createdAt:"2023-02-04T05:51:56.554Z",updatedAt:"2023-03-06T11:34:36.642Z",publishedAt:"2023-02-04T05:52:06.550Z",slug:"portfolio",intro:"A portfolio  website that shows off projects and blog posts. You're on it right now!",status:"In Progress",stacks:{data:[{id:4,attributes:{name:"TypeScript",link:"https:\u002F\u002Fwww.typescriptlang.org",type:k,createdAt:"2023-02-02T16:53:23.034Z",updatedAt:"2023-02-02T16:53:24.554Z",publishedAt:"2023-02-02T16:53:24.552Z",logo_only:c,logo:{data:{id:l,attributes:{name:"ts-lettermark-blue.svg",alternativeText:"typescript-logo",caption:a,width:1004,height:250,formats:{},hash:m,ext:e,mime:f,size:4.47,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625522\u002Fts_lettermark_blue_3293e77872.svg",previewUrl:a,provider:d,provider_metadata:{public_id:m,resource_type:b},createdAt:"2023-02-02T16:53:01.750Z",updatedAt:"2023-03-12T12:52:13.715Z"}}}}},{id:j,attributes:{name:"Vue",link:"https:\u002F\u002Fvuejs.org",type:g,createdAt:"2023-02-02T08:06:55.593Z",updatedAt:"2023-02-02T10:15:54.659Z",publishedAt:"2023-02-02T10:15:54.656Z",logo_only:c,logo:{data:{id:j,attributes:{name:"vuejs.svg",alternativeText:"vue-logo",caption:a,width:120,height:60,formats:{},hash:n,ext:e,mime:f,size:8.18,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625564\u002Fvuejs_e0422f33d6.svg",previewUrl:a,provider:d,provider_metadata:{public_id:n,resource_type:b},createdAt:"2023-02-02T08:06:31.781Z",updatedAt:"2023-03-12T12:52:56.208Z"}}}}},{id:18,attributes:{name:"Nuxt",link:"https:\u002F\u002Fnuxt.com",type:g,createdAt:"2023-02-04T05:41:48.800Z",updatedAt:"2023-02-04T05:41:52.496Z",publishedAt:"2023-02-04T05:41:52.492Z",logo_only:c,logo:{data:{id:77,attributes:{name:"Nuxt.svg",alternativeText:"nuxt-logo",caption:a,width:132,height:32,formats:{},hash:o,ext:e,mime:f,size:2.53,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625268\u002FNuxt_90743c7f6e.svg",previewUrl:a,provider:d,provider_metadata:{public_id:o,resource_type:b},createdAt:"2023-02-04T05:41:46.417Z",updatedAt:"2023-03-12T12:48:19.106Z"}}}}},{id:17,attributes:{name:"Strapi",link:"https:\u002F\u002Fstrapi.io",type:g,createdAt:"2023-02-04T05:41:10.060Z",updatedAt:"2023-02-04T05:41:10.776Z",publishedAt:"2023-02-04T05:41:10.769Z",logo_only:c,logo:{data:{id:76,attributes:{name:"Strapi.png",alternativeText:"strapi-logo",caption:a,width:1751,height:424,formats:{thumbnail:{name:"thumbnail_Strapi.png",hash:p,ext:h,mime:i,path:a,width:245,height:59,size:8.72,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625302\u002Fthumbnail_Strapi_ccdd3cf604.png",provider_metadata:{public_id:p,resource_type:b}}},hash:q,ext:h,mime:i,size:10.72,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625302\u002FStrapi_ccdd3cf604.png",previewUrl:a,provider:d,provider_metadata:{public_id:q,resource_type:b},createdAt:"2023-02-04T05:41:06.002Z",updatedAt:"2023-03-12T12:48:33.097Z"}}}}},{id:15,attributes:{name:"Tailwind",link:"https:\u002F\u002Ftailwindcss.com",type:g,createdAt:"2023-02-03T17:32:08.355Z",updatedAt:"2023-02-03T17:41:11.729Z",publishedAt:"2023-02-03T17:32:09.176Z",logo_only:c,logo:{data:{id:74,attributes:{name:"tailwind.svg",alternativeText:"tailwind-logo",caption:a,width:90,height:28,formats:{},hash:r,ext:e,mime:f,size:3.29,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625323\u002Ftailwind_6b1a9ee43f.svg",previewUrl:a,provider:d,provider_metadata:{public_id:r,resource_type:b},createdAt:"2023-02-03T17:33:53.727Z",updatedAt:"2023-03-12T12:48:55.004Z"}}}}},{id:l,attributes:{name:"SASS",link:"https:\u002F\u002Fsass-lang.com",type:k,createdAt:"2023-02-03T17:20:07.969Z",updatedAt:"2023-02-03T17:20:08.841Z",publishedAt:"2023-02-03T17:20:08.839Z",logo_only:c,logo:{data:{id:44,attributes:{name:"SASS.png",alternativeText:"sass-logo",caption:a,width:1200,height:900,formats:{thumbnail:{name:"thumbnail_SASS.png",hash:s,ext:h,mime:i,path:a,width:208,height:156,size:16.02,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625353\u002Fthumbnail_SASS_7bff83e497.png",provider_metadata:{public_id:s,resource_type:b}}},hash:t,ext:h,mime:i,size:17.15,url:"https:\u002F\u002Fres.cloudinary.com\u002Fdzhcys4fu\u002Fimage\u002Fupload\u002Fv1678625353\u002FSASS_7bff83e497.png",previewUrl:a,provider:d,provider_metadata:{public_id:t,resource_type:b},createdAt:"2023-02-03T15:45:58.469Z",updatedAt:"2023-03-12T12:49:23.518Z"}}}}}]},splash:{id:8,light:{data:a},dark:{data:{id:78,attributes:{name:"crown.svg",alternativeText:a,caption:a,width:u,height:u,formats:{},hash:"crown_7df0ff3e4d",ext:e,mime:f,size:1.92,url:"https:\u002F\u002Fcloudflare-ipfs.com\u002Fipfs\u002Fbafybeiespbc7fld2yhstmu7yvl33oiz4dbdun54nuv7nr2dniu55vxtpkq",previewUrl:a,provider:"strapi-provider-upload-ipfs-storage",provider_metadata:a,createdAt:"2023-02-04T05:51:21.964Z",updatedAt:"2023-02-11T14:18:19.050Z"}}}},showcase:{data:a}}},meta:{}},social:{data:{id:j,attributes:{github:"https:\u002F\u002Fgithub.com\u002Fbadalya1",twitter:a,telegram:"https:\u002F\u002Ft.me\u002Fbadalya1",whatsapp:"https:\u002F\u002Fwa.me\u002F+16478857235",instagram:"https:\u002F\u002Finstagram.com\u002Fdavo.ab",linkedin:"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fdavitbadalyan\u002F",createdAt:"2023-01-30T09:06:59.795Z",updatedAt:"2023-02-02T12:22:11.223Z",publishedAt:"2023-01-30T09:13:42.971Z"}},meta:{}}},prerenderedAt:1681073017137}}(null,"image",true,"cloudinary",".svg","image\u002Fsvg+xml","framework",".png","image\u002Fpng",1,"language",11,"ts_lettermark_blue_3293e77872","vuejs_e0422f33d6","Nuxt_90743c7f6e","thumbnail_Strapi_ccdd3cf604","Strapi_ccdd3cf604","tailwind_6b1a9ee43f","thumbnail_SASS_7bff83e497","SASS_7bff83e497",40))