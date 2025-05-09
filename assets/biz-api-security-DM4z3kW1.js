import{O as t,j as n}from"./entry.client-CH97_AnK.js";const h=""+new URL("biz-api-signature-DIeu3gpn.png",import.meta.url).href,s="Để đảm bảo an toàn thông tin khi phát hành voucher, Got It áp dụng các biện pháp như sau:",l=[{depth:2,value:"Whitelist IP của client khi gọi API",id:"whitelist-ip-của-client-khi-gọi-api"},{depth:2,value:"Thêm key vào header khi gọi API",id:"thêm-key-vào-header-khi-gọi-api"},{depth:2,value:"Mã hóa bất đối xứng RSA (hai chiều)",id:"mã-hóa-bất-đối-xứng-rsa-hai-chiều",children:[{depth:3,value:"Các bước tích hợp",id:"các-bước-tích-hợp"},{depth:3,value:"Mã hóa thông tin voucher dùng client public key",id:"mã-hóa-thông-tin-voucher-dùng-client-public-key"}]},{depth:2,value:"Key Credential",id:"key-credential"}],d={title:"An toàn thông tin với Biz API"};function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.p,{children:"Để đảm bảo an toàn thông tin khi phát hành voucher, Got It áp dụng các biện pháp như sau:"}),`
`,n.jsx(i.h2,{id:"whitelist-ip-của-client-khi-gọi-api",children:"Whitelist IP của client khi gọi API"}),`
`,n.jsx(i.p,{children:"Môi trường stg:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Nếu IP location ngoài Việt Nam: Client cầng cung cấp IP để Got It add vào whitelist"}),`
`]}),`
`,n.jsx(i.p,{children:"Môi trường production:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Chỉ các IP trong whitelist của Got It mới call được API nên client cần cung cấp IP."}),`
`,n.jsx(i.li,{children:"Limit max 3000 request trong 5 phút."}),`
`]}),`
`,n.jsx(i.h2,{id:"thêm-key-vào-header-khi-gọi-api",children:"Thêm key vào header khi gọi API"}),`
`,n.jsxs(i.p,{children:["Xem phần ",n.jsx(i.em,{children:n.jsx(i.strong,{children:n.jsx(i.a,{href:"#key-credential",children:"Key Credential"})})})," phía dưới"]}),`
`,n.jsx(i.h2,{id:"mã-hóa-bất-đối-xứng-rsa-hai-chiều",children:"Mã hóa bất đối xứng RSA (hai chiều)"}),`
`,n.jsxs(i.p,{children:["Để chứng thực dữ liệu khi client call API. Got It cung cấp cơ chế mã hóa bất đối xứng RSA hay còn gọi là hệ mã hóa public key, nó sử dụng một cặp key để mã hóa và giải mã: ",n.jsx(i.strong,{children:"public key (khóa công khai) dùng để mã hóa"})," và ",n.jsx(i.strong,{children:"private key dùng để giải mã"}),"."]}),`
`,n.jsxs(i.p,{children:["Got It và đối tác sẽ tạo ra cặp private và public key có độ dài là ",n.jsx(i.strong,{children:"2048 bit"}),", 2 bên sẽ trao đổi public key."]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Khi client call đến Got It, client sẽ dùng private key của mình ký trên dữ liệu gửi đi theo quy tắc được Got It định nghĩa. Got It sẽ dùng public key mà đối tác cung cấp để xác thucwj dữ liệu là đúng và được gửi từ phía client."}),`
`,n.jsx(i.li,{children:"Got It sẽ dùng private key của mình ký trên dữ liệu trả về, đối tác sẽ dùng public key Got It cung cấp để xác thực chữ ký."}),`
`]}),`
`,n.jsx(i.h3,{id:"các-bước-tích-hợp",children:"Các bước tích hợp"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["GotIt và client sẽ cùng tạo cặp private và public key theo ",n.jsx(i.strong,{children:"chuẩn RSA 2048 bit"})," và trao đổi public key với nhau. Public key sẽ có dạng như sau:"]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvjVsj2Ry7hBDJZYky+Oi
ZZTN49MUeEbXEOrQzuckWi3fQDSH7s0F7rG3gLX33W0C0SeEOUty1TIZyfbpCMuU
……………………………………………………………………………………………………………………………
………………………………………………………………………………………………………………………………..
elJ7PfaAZT2m/qT+bsvtMo2nSFEJ1SgyinYZTR5jyyJXVRydUR+hNanSNgXctMSb
RwIDAQAB
-----END PUBLIC KEY-----

`})}),`
`,n.jsxs(i.p,{children:["2. Khi gọi API ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/v"}),", ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/g"}),", ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/e"}),", ",n.jsx(i.code,{inline:!0,children:"/v4.0/vouchers/multiple/status/:transactionRefId"}),", phía client cần truyền thêm tham số ",n.jsx(i.em,{children:n.jsx(i.strong,{children:"signature (được mã hóa SHA256 with RSA và base64)"})})," vào body params. GotIt sẽ xác thực signature này, nếu đúng sẽ tiến hành xử lý API, nếu sai sẽ báo lỗi (",n.jsx(i.code,{inline:!0,children:"3003: The signature is incorrect"}),")."]}),`
`,n.jsx(i.p,{children:"3. Signature được tạo từ access code có cú pháp tương ứng cho các API như sau"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Cú pháp access code khi gọi API ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/v"}),", ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/g"}),":"]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`[API Key]|orderName|expiryDate|transactionRefId 
`})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Cú pháp access code khi gọi API ",n.jsx(i.code,{inline:!0,children:"/api/v4.0/vouchers/e"}),":"]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`[API Key]|transactionRefId 
`})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Cú pháp access code khi gọi API ",n.jsx(i.code,{inline:!0,children:"/v4.0/vouchers/multiple/status/:transactionRefId"}),":"]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`[API Key]|transactionRefId 
`})}),`
`,n.jsx(i.p,{children:"4. Response từ Got It sẽ đính kèm chữ ký của Got It ở header, đối tác sẽ xác thực chữ ký dựa trên public key của Got It cung cấp và toàn bộ nội dung response."}),`
`,n.jsx(i.h3,{id:"mã-hóa-thông-tin-voucher-dùng-client-public-key",children:"Mã hóa thông tin voucher dùng client public key"}),`
`,n.jsx(i.p,{children:"Got It dùng client public key để mã hóa dữ liệu trả về. Client sẽ dùng private key để giải mã. Voucher trả về sẽ có dạng như sau:"}),`
`,n.jsx(i.p,{children:n.jsx(i.img,{src:h,alt:"Biz API Encryption With Public Key"})}),`
`,n.jsx(i.h2,{id:"key-credential",children:"Key Credential"}),`
`,n.jsxs(i.p,{children:["Tất cả yêu cầu gửi đến phải chứa trường ",n.jsx(i.strong,{children:"'X-GI-Authorization'"})," trên header, API Key do Got It cung cấp. Đây là mã bí mật, duy nhất chỉ cung cấp cho khách hàng, khách hàng có trách nhiệm bảo mật. ",n.jsx(i.strong,{children:"Khách hàng để lộ API Key X-GI-Authorization sẽ phải chịu trách nhiệm cho mọi voucher phát sinh từ phía API Key này."})]}),`
`,n.jsx(i.p,{children:"Thông tin này sẽ thay đổi theo từng môi trường, khách hàng nên để chúng trong cấu hình của application."})]})}function a(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(c,{...e})}):c(e)}export{a as default,s as excerpt,d as frontmatter,l as tableOfContents};
//# sourceMappingURL=biz-api-security-DM4z3kW1.js.map
