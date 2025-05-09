import{O as i,j as e}from"./entry.client-CS55Ur1r.js";const d="Steps to integrate with Got It:",o=[{depth:2,value:"API Integration Document",id:"api-integration-document"},{depth:2,value:"Integration Process",id:"integration-process"},{depth:2,value:"Integration Information",id:"integration-information"},{depth:2,value:"Security Requirements",id:"security-requirements"},{depth:2,value:"HTTP Request",id:"http-request"},{depth:2,value:"References",id:"references",children:[{depth:3,value:"Voucher State",id:"voucher-state"},{depth:3,value:"Timezone",id:"timezone"}]},{depth:2,value:"Sequence Diagram",id:"sequence-diagram"}],h={title:"How to integrate"};function r(t){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"api-integration-document",children:"API Integration Document"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:e.jsx(n.strong,{children:"Version"})}),e.jsx(n.th,{children:e.jsx(n.strong,{children:"Description"})}),e.jsx(n.th,{children:e.jsx(n.strong,{children:"Date of record"})})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"6.0"}),e.jsx(n.td,{children:"Initial document"}),e.jsx(n.td,{children:"21/03/2025"})]})})]}),`
`,e.jsx(n.h2,{id:"integration-process",children:"Integration Process"}),`
`,e.jsx(n.p,{children:"Steps to integrate with Got It:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Register a business account with Got It's Merchant Department"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Carry out the integration following the documentation provided"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Software testing"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"After integrating and testing, Got It will validate your service on the sandbox environment before going to the production environment"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"After validating, your business account will be at status verified"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Change the integration information for the production environment"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Implement"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"integration-information",children:"Integration Information"}),`
`,e.jsx(n.p,{children:"Got It provides merchant 2 environments to integrate API with Got It:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing (Sandbox):"})," Using in the integration process: build features, test, debug, etc. After registering for integration, Got It will provide each Merchant with a Pin Code to identify the store, and a list of voucher codes in the sandbox environment"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Production:"})," Using to deploy for end user to make payment. To connect Got It's API to the production environment, the Merchant needs to provide an IP for Got It to add to the whitelist."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"In case the Merchant does not provide an IP for Got It to add to the whitelist: calls from merchant will be limited to maxium 20 codes/request."}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"security-requirements",children:"Security Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All API connections must use the TLS v1.2 (or above) protocol"}),`
`]}),`
`,e.jsx(n.h2,{id:"http-request",children:"HTTP Request"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:e.jsx(n.strong,{children:"Data"})}),e.jsx(n.th,{children:e.jsx(n.strong,{children:"Description"})})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Content-Type ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"(required)"})}),e.jsx("br",{}),"Applied to all operations"]}),e.jsxs(n.td,{children:["“application/json”",e.jsx("br",{}),"Default: application.json"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Domain ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"(required)"})})]}),e.jsxs(n.td,{children:["Sandbox environment:  ",e.jsx(n.a,{href:"https://openapi-stg.gotit.vn",children:"https://openapi-stg.gotit.vn"}),e.jsx("br",{}),"Production environment: ",e.jsx(n.a,{href:"https://openapi.gotit.vn",children:"https://openapi.gotit.vn"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.h3,{id:"voucher-state",children:"Voucher State"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:e.jsx(n.strong,{children:"State code"})}),e.jsx(n.th,{children:e.jsx(n.strong,{children:"State name"})}),e.jsx(n.th,{children:e.jsx(n.strong,{children:"Description"})})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"New"}),e.jsx(n.td,{children:"Status means the voucher was generated and Got It returned the voucher information via API response already."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2"}),e.jsx(n.td,{children:"Sent"}),e.jsx(n.td,{children:"Voucher was sent via Email or SMS"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"3"}),e.jsx(n.td,{children:"Opened"}),e.jsx(n.td,{children:"Voucher link was opened (by user)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"4"}),e.jsx(n.td,{children:"Used"}),e.jsx(n.td,{children:"Voucher was used (redeemed by merchant's offline stores or partnership online services (e.g. phone topup, flower order,...)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"5"}),e.jsx(n.td,{children:"Downloaded"}),e.jsx(n.td,{children:"If a voucher was generated through Got It Biz Portal: status means portal user downloaded the excel file contains voucher information"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"8"}),e.jsx(n.td,{children:"Expired"}),e.jsx(n.td,{children:"Voucher is expired"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"9"}),e.jsx(n.td,{children:"Cancelled"}),e.jsx(n.td,{children:"Voucher was cancelled (by Got It with reasons)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"10"}),e.jsx(n.td,{children:"Splitted"}),e.jsx(n.td,{children:"Splittable voucher was splitted to be used"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"11"}),e.jsx(n.td,{children:"Reserved"}),e.jsx(n.td,{children:"Voucher has been reserved for a bill number"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Inactive"}),e.jsx(n.td,{children:"Voucher is waiting for being activated"})]})]})]}),`
`,e.jsx(n.h3,{id:"timezone",children:"Timezone"}),`
`,e.jsx(n.p,{children:"We are using the time zone: GMT+7"}),`
`,e.jsx(n.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),`
`,e.jsx(n.p,{children:"There are two flow to use voucher:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"RESERVE_FLOW: Check voucher -> reserve voucher -> mark use voucher"}),`
`,e.jsx(n.li,{children:"DIRECT_FLOW: Check voucher -> mark use voucher"}),`
`]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.a,{href:"../merchant-api-reserve-flow",children:"RESERVE_FLOW"}),", before mark voucher as used, we place it in reserve state. Reserved vouchers cannot be mark used by other merchants or even by other stores of the same merchant as well. This flow is suitable for online application where it need to lock the resource and make payment transaction, then mark resource as consumed when payment completed."]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.a,{href:"../merchant-api-skip-reserve-flow",children:"DIRECT_FLOW"}),", the process is very simple, system only need to check voucher validity then mark it as used. It is suitable for offline payment scenarios, such as in POS at store."]})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{c as default,d as excerpt,h as frontmatter,o as tableOfContents};
//# sourceMappingURL=merchant-api-BfmgPZTX.js.map
