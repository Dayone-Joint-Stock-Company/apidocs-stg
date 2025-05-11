import{O as s,j as e}from"./entry.client-DvcdY5FB.js";const o=""+new URL("merchant-api-reserve-flow-BTp0Q39_.png",import.meta.url).href,c=[{depth:3,value:"1/ Merchant apply reserve voucher flow.",id:"1-merchant-apply-reserve-voucher-flow",children:[{depth:4,value:"Check > Reserve > Mark use",id:"check--reserve--mark-use"},{depth:4,value:"Unreserve",id:"unreserve"}]}],h={title:"Use voucher with reserved first"};function t(n){const r={br:"br",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h3,{id:"1-merchant-apply-reserve-voucher-flow",children:"1/ Merchant apply reserve voucher flow."}),`
`,e.jsx(r.h4,{id:"check--reserve--mark-use",children:"Check > Reserve > Mark use"}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:o,alt:""})}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Description:"})}),`
`,e.jsx(r.p,{children:"(1) User has an order to pay with Got It vouchers, user provides vouchers code(s) to merchant."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"If the merchant has not yet agreed with Got It and identified the SKUs participating in the campaign, go to step (2)"}),`
`,e.jsx(r.li,{children:"If the merchant has agreed with Got It and identified the SKUs participating in the campaign, go to step (6)"}),`
`]}),`
`,e.jsxs(r.p,{children:["(2) Merchant calls ",e.jsx(r.code,{inline:!0,children:"API/checkmultiple.json"}),", transmits voucher code information to check the validity and ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"})," information of the voucher (if any)."]}),`
`,e.jsx(r.p,{children:"(3) The Got It system checks the validity of the voucher code"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Valid: return response valid code(s) can reserve/ mark use and list of redeemable SKUs (of vouchers of ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"})," type)."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Invalid: return the response invalid code"}),`
`]}),`
`]}),`
`,e.jsx(r.p,{children:"(4) Got It responds to voucher code information."}),`
`,e.jsxs(r.p,{children:["(5) In case the order contains voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", the merchant checks the SKUs in the bill with the ",e.jsx(r.code,{inline:!0,children:"redeemable_skus"})," of the voucher codes"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If the bill contains available SKUs of vouchers type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (7)"]}),`
`,e.jsxs(r.li,{children:["If the bill does not contain available SKUs of vouchers type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (15)"]}),`
`]}),`
`,e.jsx(r.p,{children:"(6)Merchant checks the campaign's defined SKU list and the SKUs in the user's bill"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"If the bill contains SKUs participating in the campaign, go to step (7)"}),`
`,e.jsx(r.li,{children:"If the bill does not contain SKUs participating in the campaign, go to step (12)"}),`
`]}),`
`,e.jsxs(r.p,{children:["(7) Call ",e.jsx(r.code,{inline:!0,children:"API/checkmultiple.json"})," to check the validity of the voucher. The information transmitted through Got It includes the SKUs in the order."]}),`
`,e.jsx(r.p,{children:"(8) The Got It system checks the validity of the vouchers and responds to the voucher information to the merchant. If the voucher code is valid: Merchant can mark use voucher codes"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If the bill contains voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (9)"]}),`
`,e.jsxs(r.li,{children:["If the bill does not contain voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (10)"]}),`
`]}),`
`,e.jsxs(r.p,{children:["(9) For voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", based on the voucher codes and SKUs in the order, the Got It system calculates the actual redeemable value of the voucher."]}),`
`,e.jsx(r.p,{children:"(10) Got It responds to voucher codes information."}),`
`,e.jsx(r.p,{children:"(11) Merchant responds with voucher codes information to the user, go to step (16)"}),`
`,e.jsxs(r.p,{children:["(12) Merchant calls ",e.jsx(r.code,{inline:!0,children:"API/checkmultiple.json"})," to check voucher code information."]}),`
`,e.jsx(r.p,{children:"(13) Got It checks the validity of voucher codes."}),`
`,e.jsx(r.p,{children:"(14) Got It responds to voucher code information."}),`
`,e.jsx(r.p,{children:"(15) Merchant responds with voucher code information to the user"}),`
`,e.jsx(r.p,{children:"(16) User keep buying other products"}),`
`,e.jsxs(r.p,{children:["(17) Merchant creates a new bill for the user’s order, then call ",e.jsx(r.em,{children:e.jsx(r.strong,{children:"API/reserved"})})," to hold code(s) for the bill_number",e.jsx(r.br,{}),`
`,"(18) Got It receives request params from merchant and reserve code for the bill_number. Once code is reserved, it cannot be reserved or marked for use for another bill_number. And it can only be marked using for reserved bill_number"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If the bill contains voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (19)"]}),`
`,e.jsxs(r.li,{children:["If the bill does not contain voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (20)"]}),`
`]}),`
`,e.jsxs(r.p,{children:["(19) The Got It system calculates the actual redemption value of the voucher and records the redeemed SKU for the voucher",e.jsx(r.br,{}),`
`,"(20) Got It responds the result of reserving code(s) for the merchant."]}),`
`,e.jsx(r.p,{children:"(21) Merchant waits for the user to pay the bill."}),`
`,e.jsx(r.p,{children:"(22) User proceeds to pay for the order"}),`
`,e.jsxs(r.p,{children:["(23) Merchant calls ",e.jsx(r.em,{children:e.jsx(r.strong,{children:"API/usemultiple.json"})})," to mark use voucher codes"]}),`
`,e.jsx(r.p,{children:"(24) The Got It system marks vouchers for use."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If the bill contains voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (25)"]}),`
`,e.jsxs(r.li,{children:["If the bill does not contain voucher type = ",e.jsx(r.code,{inline:!0,children:"redeemable_sku"}),", go to step (26)"]}),`
`]}),`
`,e.jsx(r.p,{children:"(25) The Got It system calculates the actual redemption value of the voucher and records the redeemed SKU for the voucher"}),`
`,e.jsx(r.p,{children:"(26) The Got It system responds to the result of marking voucher use"}),`
`,e.jsx(r.p,{children:"(27) Merchant responds with detailed bill information to the user."}),`
`,e.jsx(r.h4,{id:"unreserve",children:"Unreserve"}),`
`,e.jsx(r.p,{children:"Description:"}),`
`,e.jsxs(r.p,{children:["(1) The user is in the process of paying for the order, and the user has provided the voucher code to the merchant to reserve the code(s) for this bill_bumber. But the user wants to terminate the payment process.",e.jsx(r.br,{}),`
`,"(2) Merchant call ",e.jsx(r.em,{children:e.jsx(r.strong,{children:"API/unreserved"})})," to un-reserved code(s).",e.jsx(r.br,{}),`
`,"(3) Got It mark unreserved code(s) for bill_number from request params.",e.jsx(r.br,{}),`
`,"If bill_number in request params and bill_number reserving voucher code(s) is the same, code(s) will be returned to the old state which before reserving.",e.jsx(r.br,{}),`
`,"(4) Got It response the result of un-reserving code(s) to merchant.",e.jsx(r.br,{}),`
`,"(5) Merchant response the result of payment termination to the user."]})]})}function l(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{l as default,h as frontmatter,c as tableOfContents};
//# sourceMappingURL=merchant-api-reserve-flow-CiMJG5QZ.js.map
