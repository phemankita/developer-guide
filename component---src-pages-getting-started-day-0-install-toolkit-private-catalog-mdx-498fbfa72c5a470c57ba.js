(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"2l3c":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a("wx14"),l=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("XbGe"),o=a("T0C+"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=c("PageDescription"),d=c("InlineNotification"),p={_frontmatter:b},m=r.a;function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"One of the features of the IBM Cloud Catalog is support for private catalog tiles. These can\ncontain custom Terraform definitions that can accelerate SRE teams in the execution of common\nand repetitive tasks. The ",Object(i.b)(o.a,{name:"shortName",mdxType:"Globals"})," tools installation can be configured as\na private catalog tile. This is the recommended approach for using this asset multiple times.\nThis asset enables the easy transition of a default cluster into a cluster that supports\nCloud-Native CI/CD development tools."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQoz52QyQ6DMAxE/f8fyqIENSEJWVhcxsISVOqFw4D8bI09oSUXrrVyzpnXdRWli5VSpN62jdOShUHHcTzmoH3fhZG1lruu43Ec2XsvDXOxvu95miYxVDYMA6eUhNmzhxlonmc5ikIIHGN8XBljYHAVmM7hjzks/mXwoFqbNCFEaa3JBRoFNaLfmS4HQ+/O6OM8G2PYOSemMNDLEAP6V9+ZcornB2+nABsR460IBnhgja0XvjX8Ar7EHWheF5ILAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Private Catalog Tiles",title:"Private Catalog Tiles",src:"/static/f995c64d941406c5ff2927fa7efadeb3/3cbba/private-catalog-tiles.png",srcSet:["/static/f995c64d941406c5ff2927fa7efadeb3/7fc1e/private-catalog-tiles.png 288w","/static/f995c64d941406c5ff2927fa7efadeb3/a5df1/private-catalog-tiles.png 576w","/static/f995c64d941406c5ff2927fa7efadeb3/3cbba/private-catalog-tiles.png 1152w","/static/f995c64d941406c5ff2927fa7efadeb3/0b124/private-catalog-tiles.png 1728w","/static/f995c64d941406c5ff2927fa7efadeb3/4ea69/private-catalog-tiles.png 2304w","/static/f995c64d941406c5ff2927fa7efadeb3/e2345/private-catalog-tiles.png 2674w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)(d,{kind:"warning",mdxType:"InlineNotification"},"This installation method will only work on IBM Cloud. Use Iteration Zero for others."),Object(i.b)("h2",null,"Cloud-Native Toolkit: Tile Installation"),Object(i.b)("p",null,"Walkthrough of the Cloud Native Toolkit installation on RedHat OpenShift using the Private Catalog on IBM Cloud."),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/H_DsaYXLBVc",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(i.b)("h3",null,"A. Create the catalog"),Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to the ",Object(i.b)(o.a,{name:"ic",mdxType:"Globals"})," Console"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Manage->Catalogs")," from the top menu"),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Create Catalog")),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"Create a catalog")," dialog, provide the following values:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"name:")," the name of the catalog, for example ",Object(i.b)("inlineCode",{parentName:"li"},"Team Catalog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"description:")," (optional) a brief description of the purpose of the catalog"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"products:")," select ",Object(i.b)("strong",{parentName:"li"},"Start with no products")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"resource group:")," click ",Object(i.b)("strong",{parentName:"li"},"Update")," to change the default resource group for the catalog"))),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create")," to complete the catalog creation")),Object(i.b)("h3",null,"B. Register the ",Object(i.b)(o.a,{name:"shortName",mdxType:"Globals"})," tiles in the catalog"),Object(i.b)("br",null),Object(i.b)(d,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The following instructions depend on the ",Object(i.b)("inlineCode",{parentName:"p"},"jq")," command. The information for installing\n",Object(i.b)("inlineCode",{parentName:"p"},"jq")," can be found on the ",Object(i.b)("a",{parentName:"p",href:"/getting-started/prereqs"},Object(i.b)(o.a,{name:"shortName",mdxType:"Globals"})," prerequisites")," page")),Object(i.b)("br",null),Object(i.b)("p",null,"Run the following command to install the offering tiles into an existing catalog. You will be prompted for your catalog name\nand IBM Cloud API Key."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'bash -c "$(curl -Ls tiles.cloudnativetoolkit.dev)"\n')),Object(i.b)("p",null,"Alternatively, the values can be provided to the script via environment variables named ",Object(i.b)("inlineCode",{parentName:"p"},"CATALOG_NAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"API_KEY"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'CATALOG_NAME="Team Catalog" API_KEY="xxxx" bash -c "$(curl -Ls tiles.cloudnativetoolkit.dev)"\n')),Object(i.b)("h3",null,"C. Apply the tile"),Object(i.b)("br",null),Object(i.b)("p",null,"Once the tile has been installed it can be used repeatedly to set up clusters with\nthe CNCF tools. Each time the tile is applied, a set of configuration variables are\nrequired."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the ",Object(i.b)(o.a,{name:"ic",mdxType:"Globals"})," Console.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Catalog")," from the top menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the side menu, select your catalog from the drop-down list (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Team Catalog"),"). (",Object(i.b)("strong",{parentName:"p"},"IBM Cloud catalog")," should be selected initially.)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Private")," on the side menu to see the private catalog entries")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Cloud-Native Toolkit")," tile")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter values for the variables list provided."),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Variable")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"eg. Value")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ibmcloud_api_key")),Object(i.b)("td",{parentName:"tr",align:null},"The API key from IBM Cloud Console that has ClusterAdmin access and supports service creation"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"{guid API key from Console}"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(i.b)("td",{parentName:"tr",align:null},"Existing resource group in the account where the cluster has been created"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"region")),Object(i.b)("td",{parentName:"tr",align:null},"The region where the cluster has been provisioned"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(i.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(i.b)("td",{parentName:"tr",align:null},"Flag indicating if the cluster already exists. (",Object(i.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(i.b)("td",{parentName:"tr",align:null},"Flag indicating that the cluster has been built on VPC infrastructure"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(i.b)("td",{parentName:"tr",align:null},"A comma-separated list of the VPC zones that should be used for worker nodes. This value is requored if ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," and ",Object(i.b)("inlineCode",{parentName:"td"},"vpc_cluster")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(i.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the cluster (If ",Object(i.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster)"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(i.b)("td",{parentName:"tr",align:null},"The type of cluster into which the toolkit will be installed"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(i.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(i.b)("td",{parentName:"tr",align:null},"The namespace that should be used in the IBM Container Registry. If not provided the value will default to the resource group name"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(i.b)("td",{parentName:"tr",align:null},"Flag indicating that a new instance of LogDNA should be provisioned"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the LogDNA instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(i.b)("td",{parentName:"tr",align:null},"Flag indicating that a new instance of Sysdig should be provisioned"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," or ",Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the Sysdig instance (If ",Object(i.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(i.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))))),Object(i.b)(d,{mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," Provisioning a new cluster using classic infrastructure is not supported with the tile install. In this case\nyou are recommended to either create the cluster using the ",Object(i.b)(o.a,{name:"ic",mdxType:"Globals"})," Console then use the tile\nto install the Toolkit ",Object(i.b)("strong",{parentName:"p"},"OR")," to install with one of the other methods.")))),Object(i.b)("br",null),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Check the box to accept the ",Object(i.b)("strong",{parentName:"li"},"Apache 2")," license for the tile."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Install")," to start the install process")),Object(i.b)("p",null,"This will kick off the installation of the ",Object(i.b)(o.a,{name:"shortName",mdxType:"Globals"})," using an\nIBM Cloud Private Catalog Tile. The progress can be reviewed from the\n",Object(i.b)("strong",{parentName:"p"},"Schematics")," entry"),Object(i.b)("h2",null,"Post-installation steps"),Object(i.b)("p",null,"Once the Terraform has completed, walk through the ",Object(i.b)("a",{parentName:"p",href:"/getting-started-day-0/post-installation"},"post installation steps")," to\nexplore and verify the environment."),Object(i.b)("h2",null,"Troubleshooting"),Object(i.b)("p",null,"If you find that the Terraform provisioning has failed, for Private Catalog delete the workspace and for Iteration Zero  try re-running the ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(i.b)("p",null,"If you find that some of the services have failed to create in the time allocated, try the following with Iteration zero:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Manually delete the service instances in your resource group"),Object(i.b)("li",{parentName:"ol"},"Re-run the ",Object(i.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script with the ",Object(i.b)("inlineCode",{parentName:"li"},"--delete")," argument to clean up the state",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./runTerraform.sh --delete\n")))))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NmYn"),r=a.n(i),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,r=l.subDirectory,b=i+"/edit/"+l.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=r()(e,{lower:!0,strict:!0}),i=l===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,l);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(o.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},l))))))},t}(l.a.Component),C=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,m=s.tabs,g=s.title,h=s.theme,N=s.description,y=s.keywords,x=Object(v.a)().interiorTheme,T=Object(o.useStaticQuery)("223705900").site.pathPrefix,w=T?n.pathname.replace(T,""):n.pathname,A=m?w.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",k=h||x;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:k,pageTitle:g,pageDescription:N,pageKeywords:y,titleType:p},Object(u.b)(O,{title:l?Object(u.b)(l,null):g,label:"label",tabs:m,theme:k}),m&&Object(u.b)(f,{slug:w,tabs:m,currentTab:A}),Object(u.b)(C.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d})),Object(u.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-install-toolkit-private-catalog-mdx-498fbfa72c5a470c57ba.js.map