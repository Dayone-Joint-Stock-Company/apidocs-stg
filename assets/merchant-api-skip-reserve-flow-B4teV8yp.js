import{O as r,j as e}from"./entry.client-CH97_AnK.js";const o=""+new URL("merchant-api-skip-reserve-flow-CR-zYoPI.png",import.meta.url).href,c=[{depth:3,value:"2/ Merchant do not apply reserve voucher flow.",id:"2-merchant-do-not-apply-reserve-voucher-flow",children:[{depth:4,value:"Check > Mark use",id:"check--mark-use"}]}],h={title:"Use voucher without reserved first"};function s(t){const n={code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"2-merchant-do-not-apply-reserve-voucher-flow",children:"2/ Merchant do not apply reserve voucher flow."}),`
`,e.jsx(n.h4,{id:"check--mark-use",children:"Check > Mark use"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:o,alt:""})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Description"}),":"]}),`
`,e.jsx(n.p,{children:"(1) User has an order to pay with Got It vouchers, user provides vouchers code(s) to merchant."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the merchant has not yet agreed with Got It and identified the SKUs participating in the campaign, go to step (2)"}),`
`,e.jsx(n.li,{children:"If the merchant has agreed with Got It and identified the SKUs participating in the campaign, go to step (6)"}),`
`]}),`
`,e.jsxs(n.p,{children:["(2) Merchant calls ",e.jsx(n.code,{inline:!0,children:"API/checkmultiple.json"}),", transmits voucher code information to check the validity and ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"})," information of the voucher (if any)."]}),`
`,e.jsx(n.p,{children:"(3) The Got It system checks the validity of the voucher code"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Valid: return response valid code(s) can reserve/ mark use and list of redeemable SKUs (of vouchers of ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"})," type)."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Invalid: return the response invalid code"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"(4) Got It responds to voucher code information."}),`
`,e.jsxs(n.p,{children:["(5) In case the order contains voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", the merchant checks the SKUs in the bill with the ",e.jsx(n.code,{inline:!0,children:"redeemable_skus"})," of the voucher codes"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If the bill contains available SKUs of vouchers type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (7)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If the bill does not contain available SKUs of vouchers type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (15)"]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"(6)Merchant checks the campaign's defined SKU list and the SKUs in the user's bill"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"If the bill contains SKUs participating in the campaign, go to step (7)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"If the bill does not contain SKUs participating in the campaign, go to step (12)"}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["(7) Call ",e.jsx(n.code,{inline:!0,children:"API/checkmultiple.json"})," to check the validity of the voucher. The information transmitted through Got It includes the SKUs in the order."]}),`
`,e.jsx(n.p,{children:"(8) The Got It system checks the validity of the vouchers and responds to the voucher information to the merchant. If the voucher code is valid: Merchant can mark use voucher codes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If the bill contains voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (9)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If the bill does not contain voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (10)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["(9) For voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", based on the voucher codes and SKUs in the order, the Got It system calculates the actual redeemable value of the voucher."]}),`
`,e.jsx(n.p,{children:"(10) Got It responds to voucher codes information."}),`
`,e.jsx(n.p,{children:"(11) Merchant responds with voucher codes information to the user, go to step (16)"}),`
`,e.jsxs(n.p,{children:["(12) Merchant calls ",e.jsx(n.code,{inline:!0,children:"API/checkmultiple.json"})," to check voucher code information."]}),`
`,e.jsx(n.p,{children:"(13) Got It checks the validity of voucher codes."}),`
`,e.jsx(n.p,{children:"(14) Got It responds to voucher code information."}),`
`,e.jsx(n.p,{children:"(15) Merchant responds with voucher code information to the user"}),`
`,e.jsx(n.p,{children:"(16) User proceeds to pay for the order"}),`
`,e.jsxs(n.p,{children:["(17) Merchant calls ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"API/usemultiple.json"})})," to mark use voucher codes"]}),`
`,e.jsx(n.p,{children:"(18) The Got It system marks vouchers for use."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the bill contains voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (19)"]}),`
`,e.jsxs(n.li,{children:["If the bill does not contain voucher type = ",e.jsx(n.code,{inline:!0,children:"redeemable_sku"}),", go to step (20)"]}),`
`]}),`
`,e.jsx(n.p,{children:"(19) The Got It system calculates the actual redemption value of the voucher and records the redeemed SKU for the voucher"}),`
`,e.jsx(n.p,{children:"(20) The Got It system responds to the result of marking voucher use"}),`
`,e.jsx(n.p,{children:"(21) Merchant responds with detailed bill information to the user."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:e.jsx(n.strong,{children:"Note:"})})," Merchant when calling API/checkmultiple.json and API/usemultiple.json, pass the parameter ",e.jsx(n.strong,{children:'skip_reserved_when_mark_used = "true"'})," to apply the mark use voucher codes flow without reserve."]})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,h as frontmatter,c as tableOfContents};
//# sourceMappingURL=merchant-api-skip-reserve-flow-B4teV8yp.js.map
