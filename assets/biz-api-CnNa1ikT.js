import{O as e,j as n}from"./entry.client-DpcyURpc.js";const c=""+new URL("biz-api-flow-f5oespIO.png",import.meta.url).href,r=""+new URL("biz-api-signature-DIeu3gpn.png",import.meta.url).href,d="Đây là tài liệu kỹ thuật kết nối hệ thống Got It, được sử dụng để phát hành voucher trên nhiều nền tảng khác nhau: Desktop Website, Mobile Website, Mobile Application... Yêu cầu bắt buộc là API Got It phải được gọi từ server của khách hàng. Không được gọi từ Javascript phía end-user.",l=[{depth:2,value:"Lịch sử tài liệu",id:"lịch-sử-tài-liệu"},{depth:2,value:"Quy trình tích hợp",id:"quy-trình-tích-hợp"},{depth:2,value:"Thông tin tích hợp",id:"thông-tin-tích-hợp"},{depth:2,value:"Yêu cầu bảo mật",id:"yêu-cầu-bảo-mật"},{depth:2,value:"Key Credential",id:"key-credential"},{depth:2,value:"Cấu hình HTTP Request",id:"cấu-hình-http-request"},{depth:2,value:"Luồng xử lý",id:"luồng-xử-lý"},{depth:2,value:"Bảng trạng thái voucher",id:"bảng-trạng-thái-voucher"},{depth:2,value:"Bảng mã lỗi",id:"bảng-mã-lỗi"},{depth:2,value:"Các vấn đề bảo mật",id:"các-vấn-đề-bảo-mật",children:[{depth:3,value:"Whitelist IP của client khi gọi API",id:"whitelist-ip-của-client-khi-gọi-api"},{depth:3,value:"Thêm key vào header khi gọi API",id:"thêm-key-vào-header-khi-gọi-api"},{depth:3,value:"Mã hóa bất đối xứng RSA (hai chiều)",id:"mã-hóa-bất-đối-xứng-rsa-hai-chiều",children:[{depth:4,value:"Các bước tích hợp",id:"các-bước-tích-hợp"},{depth:4,value:"Mã hóa thông tin voucher dùng client public key",id:"mã-hóa-thông-tin-voucher-dùng-client-public-key"}]}]},{depth:2,value:"Danh sách API",id:"danh-sách-api"},{depth:2,value:"Cấu trúc response API",id:"cấu-trúc-response-api"}],o={title:"How to integrate with Got It Biz API",side_bar:"How to integrate"};function t(i){const h={a:"a",brandid:"brandid",categoryid:"categoryid",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",productid:"productid",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",transactionrefid:"transactionrefid",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h.p,{children:"Đây là tài liệu kỹ thuật kết nối hệ thống Got It, được sử dụng để phát hành voucher trên nhiều nền tảng khác nhau: Desktop Website, Mobile Website, Mobile Application... Yêu cầu bắt buộc là API Got It phải được gọi từ server của khách hàng. Không được gọi từ Javascript phía end-user."}),`
`,n.jsx(h.h2,{id:"lịch-sử-tài-liệu",children:"Lịch sử tài liệu"}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"Ngày cập nhật"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Nội dung cập nhật"})})]})}),n.jsx(h.tbody,{children:n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"02/10/2023"}),n.jsx(h.td,{children:"Thêm mới"})]})})]}),`
`,n.jsx(h.h2,{id:"quy-trình-tích-hợp",children:"Quy trình tích hợp"}),`
`,n.jsx(h.p,{children:"Các bước cơ bản để tích hợp với Got It:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 1:"})," Đăng ký tài khoản doanh nghiệp. Bạn cần hoàn thành quá trình đăng ký với đầy đủ thông tin, trạng thái mặc định của doanh nghiệp sẽ là chưa xác thực. Thông tin tích hợp mặc định sẽ môi trường Stg"]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 2:"})," Tiến hành tích hợp theo tài liệu được cung cấp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 3:"})," Đơn vị tiến hành kiểm thử phần mềm, tham khảo các testcase của Got It cung cấp để kiểm tra các lỗi phổ biến trong quá trình phát hành voucher."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 4:"})," Sau khi đơn vị kinh doanh hoàn thành tích hợp và kiểm thử, Got It sẽ xác thực dịch vụ của bạn trên môi trường test trước khi lên production."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 5:"})," Sau khi được xác nhận, tài khoản doanh nghiệp của bạn sẽ được chuyển sang trạng thái đã xác thực."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bước 6:"})," Thay đổi các thông tin tích hợp theo môi trường production."]}),`
`]}),`
`,n.jsx(h.h2,{id:"thông-tin-tích-hợp",children:"Thông tin tích hợp"}),`
`,n.jsx(h.p,{children:"Got It cung cấp cho đơn vị kinh doanh hai môi trường để tích hợp với Biz API:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Stagging"}),": Sử dụng trong quá trình tích hợp: xây dựng tính năng, kiểm thử, debug, v.v…"]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Production"}),": Sử dụng để triển khai cho end user tạo voucher thật."]}),`
`]}),`
`,n.jsx(h.h2,{id:"yêu-cầu-bảo-mật",children:"Yêu cầu bảo mật"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Sử dụng giao thức TLS v1.2"}),`
`]}),`
`,n.jsx(h.h2,{id:"key-credential",children:"Key Credential"}),`
`,n.jsxs(h.p,{children:["Tất cả yêu cầu gửi đến phải chứa trường ",n.jsx(h.strong,{children:"“X-GI-Authorization”"})," trên header, API Key do Got It cung cấp. Đây là mã bí mật, duy nhất chỉ cung cấp cho khách hàng, khách hàng có trách nhiệm bảo mật. ",n.jsx(h.strong,{children:"Khách hàng để lộ API Key X-GI-Authorization sẽ phải chịu trách nhiệm cho mọi voucher phát sinh từ phía API Key này."})]}),`
`,n.jsx(h.p,{children:"Thông tin này sẽ thay đổi theo từng môi trường, khách hàng nên để chúng trong cấu hình của application."}),`
`,n.jsx(h.h2,{id:"cấu-hình-http-request",children:"Cấu hình HTTP Request"}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"Key"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Dữ liệu"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsxs(h.td,{children:["Content-Type ",n.jsx(h.em,{children:n.jsx(h.strong,{children:"(required)"})}),n.jsx("br",{}),"Applied to all operations"]}),n.jsxs(h.td,{children:["Luôn luôn là 'application/json'",n.jsx("br",{}),"Default: application.json"]})]}),n.jsxs(h.tr,{children:[n.jsxs(h.td,{children:["Domain ",n.jsx(h.em,{children:n.jsx(h.strong,{children:"(required)"})})]}),n.jsxs(h.td,{children:["Môi trường Staging: ",n.jsx(h.a,{href:"https://api-biz-stg.gotit.vn/",children:"https://api-biz-stg.gotit.vn/"}),n.jsx("br",{}),"Môi trường Production: ",n.jsx(h.a,{href:"https://api-biz.gotit.vn/",children:"https://api-biz.gotit.vn/"})]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Accept-Language"}),n.jsxs(h.td,{children:["Ngôn ngữ sử dụng cho các trường dạng text. (Ví dụ: tên sản phẩm, điều khoản sử dụng…)",n.jsx("br",{}),"  ",n.jsx(h.strong,{children:"en"}),": Tiếng Anh ",n.jsx(h.strong,{children:"vi"}),": Tiếng Việt"]})]})]})]}),`
`,n.jsx(h.h2,{id:"luồng-xử-lý",children:"Luồng xử lý"}),`
`,n.jsx(h.p,{children:n.jsx(h.img,{src:c,alt:"Biz API Flow"})}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Mô tả chi tiết"})}),`
`,n.jsx(h.p,{children:"(1)(2) Request/Response master data:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Yêu cầu thông tin để phục vụ cho việc tạo voucher và hiển thị thông tin cho người dùng cuối (end-user)."}),`
`,n.jsx(h.li,{children:"Sử dụng các API ở mục Get master data"}),`
`,n.jsx(h.li,{children:"Các thông tin được mô tả chi tiết ở mục Dữ liệu &amp; Định nghĩa cho từng API"}),`
`]}),`
`,n.jsx(h.p,{children:"(3)(4) Request issue voucher/Response voucher information:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Yêu cầu tạo voucher."}),`
`,n.jsx(h.li,{children:"Sử dụng các API ở mục Transaction."}),`
`]}),`
`,n.jsx(h.p,{children:"(5)(6) Request/Response send voucher to end user"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Yêu cầu gửi voucher đến người dùng cuối. Có 2 hình thức: sms và email."}),`
`,n.jsx(h.li,{children:"Sử dụng API ở mục Send SMS"}),`
`]}),`
`,n.jsx(h.p,{children:"(7) Request use voucher"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Người dùng đến yêu cầu sử dụng và cung cấp thông tin voucher cho đối tác Merchant của Got It."}),`
`]}),`
`,n.jsx(h.p,{children:"(8)(9) Request/Response redeem voucher"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Đối tác kiểm tra voucher hợp lệ và đánh dấu sử dụng."}),`
`]}),`
`,n.jsx(h.p,{children:"(10) Response result"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Đối tác phản hồi lại kết quả cho người dùng cuối"}),`
`]}),`
`,n.jsx(h.p,{children:"(11)(12) Request/Response check voucher"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Kiểm tra trạng thái voucher"}),`
`,n.jsx(h.li,{children:"Sử dụng API ở mục Phát hành voucher."}),`
`]}),`
`,n.jsx(h.p,{children:"(13) Got It gửi thông báo cập nhật trạng thái voucher (khi voucher có sự thay đổi về trạng thái)"}),`
`,n.jsx(h.h2,{id:"bảng-trạng-thái-voucher",children:"Bảng trạng thái voucher"}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"Mã"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Tên trạng thái"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Mô tả"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"1"}),n.jsx(h.td,{children:"New"}),n.jsx(h.td,{children:"Voucher đã được phát hành và đã gửi trả qua API response"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"2"}),n.jsx(h.td,{children:"Sent"}),n.jsx(h.td,{children:"Voucher được gửi bằng Email hoặc SMS (sử dụng API gửi voucher do Got It cung cấp)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"3"}),n.jsx(h.td,{children:"Opened"}),n.jsx(h.td,{children:"Voucher link đã được mở (do user)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"4"}),n.jsx(h.td,{children:"Used"}),n.jsx(h.td,{children:"Voucher đã được sử dụng (được đổi bởi các cửa hàng vật lý của người bán hoặc các dịch vụ trực tuyến đối tác (ví dụ: nạp tiền điện thoại,...)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"5"}),n.jsx(h.td,{children:"Downloaded"}),n.jsx(h.td,{children:"Trong trường hợp voucher được phát hành bằng Got It Biz Portal: thì ý nghĩa là đã download file chứa thông tin voucher"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"8"}),n.jsx(h.td,{children:"Expired"}),n.jsx(h.td,{children:"Voucher đã hết hạn sử dụng"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"9"}),n.jsx(h.td,{children:"Cancelled"}),n.jsx(h.td,{children:"Voucher đã bị hủy (Got It hủy)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"10"}),n.jsx(h.td,{children:"Splitted"}),n.jsx(h.td,{children:"Splittable voucher đã được tách.  Voucher A khi bị tách, sẽ phát sinh các voucher con B, C, D... Khi đó Voucher A sẽ có state = 10"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"0"}),n.jsx(h.td,{children:"Inactive/ New"}),n.jsx(h.td,{children:"Voucher đang chờ ngày được kích hoạt/ Voucher đang được reserved, chờ sử dụng"})]})]})]}),`
`,n.jsx(h.h2,{id:"bảng-mã-lỗi",children:"Bảng mã lỗi"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:"API Key Related 00XX (Lỗi liên quan đến API Key)"})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:"Parameter Related 10XX (Lỗi liên quan đến cú pháp tham số truyền vào)"})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:"Value Related 20XX (Lỗi liên quan đến giá trị tham số)"})}),`
`,n.jsx(h.li,{children:n.jsx(h.em,{children:"Other 99XX"})}),`
`]}),`
`,n.jsxs(h.p,{children:["Chi tiết tham khảo ",n.jsx(h.a,{href:"../biz-api-errorcodes",children:"Biz API Error Codes"})]}),`
`,n.jsx(h.h2,{id:"các-vấn-đề-bảo-mật",children:"Các vấn đề bảo mật"}),`
`,n.jsx(h.p,{children:"Để tăng cường tính bảo mật khi phát hành voucher, Got It áp dụng các biện pháp như sau:"}),`
`,n.jsx(h.h3,{id:"whitelist-ip-của-client-khi-gọi-api",children:"Whitelist IP của client khi gọi API"}),`
`,n.jsx(h.p,{children:"Môi trường stg:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Nếu IP location ngoài Việt Nam: Client cầng cung cấp IP để Got It add vào whitelist"}),`
`]}),`
`,n.jsx(h.p,{children:"Môi trường production:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Chỉ các IP trong whitelist của Got It mới call được API nên client cần cung cấp IP."}),`
`,n.jsx(h.li,{children:"Limit max 3000 request trong 5 phút."}),`
`]}),`
`,n.jsx(h.h3,{id:"thêm-key-vào-header-khi-gọi-api",children:"Thêm key vào header khi gọi API"}),`
`,n.jsxs(h.p,{children:["Xem phần ",n.jsx(h.em,{children:n.jsx(h.strong,{children:"Key Credential"})})," phía trên"]}),`
`,n.jsx(h.h3,{id:"mã-hóa-bất-đối-xứng-rsa-hai-chiều",children:"Mã hóa bất đối xứng RSA (hai chiều)"}),`
`,n.jsxs(h.p,{children:["Để chứng thực dữ liệu khi client call API. Got It cung cấp cơ chế mã hóa bất đối xứng RSA hay còn gọi là hệ mã hóa public key, nó sử dụng một cặp key để mã hóa và giải mã: ",n.jsx(h.strong,{children:"public key (khóa công khai) dùng để mã hóa"})," và ",n.jsx(h.strong,{children:"private key dùng để giải mã"}),"."]}),`
`,n.jsxs(h.p,{children:["Got It và đối tác sẽ tạo ra cặp private và public key có độ dài là ",n.jsx(h.strong,{children:"2048 bit"}),", 2 bên sẽ trao đổi public key."]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Khi client call đến Got It, client sẽ dùng private key của mình ký trên dữ liệu gửi đi theo quy tắc được Got It định nghĩa. Got It sẽ dùng public key mà đối tác cung cấp để xác thucwj dữ liệu là đúng và được gửi từ phía client."}),`
`,n.jsx(h.li,{children:"Got It sẽ dùng private key của mình ký trên dữ liệu trả về, đối tác sẽ dùng public key Got It cung cấp để xác thực chữ ký."}),`
`]}),`
`,n.jsx(h.h4,{id:"các-bước-tích-hợp",children:"Các bước tích hợp"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:["GotIt và client sẽ cùng tạo cặp private và public key theo ",n.jsx(h.strong,{children:"chuẩn RSA 2048 bit"})," và trao đổi public key với nhau. Public key sẽ có dạng như sau:"]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{children:`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvjVsj2Ry7hBDJZYky+Oi
ZZTN49MUeEbXEOrQzuckWi3fQDSH7s0F7rG3gLX33W0C0SeEOUty1TIZyfbpCMuU
……………………………………………………………………………………………………………………………
………………………………………………………………………………………………………………………………..
elJ7PfaAZT2m/qT+bsvtMo2nSFEJ1SgyinYZTR5jyyJXVRydUR+hNanSNgXctMSb
RwIDAQAB
-----END PUBLIC KEY-----

`})}),`
`,n.jsxs(h.p,{children:["2. Khi gọi API ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/v"}),", ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/g"}),", ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/e"}),", ",n.jsx(h.code,{inline:!0,children:"/v4.0/vouchers/multiple/status/:transactionRefId"}),", phía client cần truyền thêm tham số ",n.jsx(h.em,{children:n.jsx(h.strong,{children:"signature (được mã hóa SHA256 with RSA và base64)"})})," vào body params. GotIt sẽ xác thực signature này, nếu đúng sẽ tiến hành xử lý API, nếu sai sẽ báo lỗi (",n.jsx(h.code,{inline:!0,children:"3003: The signature is incorrect"}),")."]}),`
`,n.jsx(h.p,{children:"3. Signature được tạo từ access code có cú pháp tương ứng cho các API như sau"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Cú pháp access code khi gọi API ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/v"}),", ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/g"}),":"]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{children:`[API Key]|orderName|expiryDate|transactionRefId 
`})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Cú pháp access code khi gọi API ",n.jsx(h.code,{inline:!0,children:"/api/v4.0/vouchers/e"}),":"]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{children:`[API Key]|transactionRefId 
`})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:["Cú pháp access code khi gọi API ",n.jsx(h.code,{inline:!0,children:"/v4.0/vouchers/multiple/status/:transactionRefId"}),":"]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{children:`[API Key]|transactionRefId 
`})}),`
`,n.jsx(h.p,{children:"4. Response từ Got It sẽ đính kèm chữ ký của Got It ở header, đối tác sẽ xác thực chữ ký dựa trên public key của Got It cung cấp và toàn bộ nội dung response."}),`
`,n.jsx(h.h4,{id:"mã-hóa-thông-tin-voucher-dùng-client-public-key",children:"Mã hóa thông tin voucher dùng client public key"}),`
`,n.jsx(h.p,{children:"Got It dùng client public key để mã hóa dữ liệu trả về. Client sẽ dùng private key để giải mã. Voucher trả về sẽ có dạng như sau:"}),`
`,n.jsx(h.p,{children:n.jsx(h.img,{src:r,alt:"Biz API Encryption With Public Key"})}),`
`,n.jsx(h.h2,{id:"danh-sách-api",children:"Danh sách API"}),`
`,n.jsx(h.p,{children:"Bao gồm:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:'Các API lấy danh mục: Dùng để lấy danh mục "Ngành" (Category), "Thương hiệu" (Brand) và "Sản phẩm" (Product)'}),`
`]}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"API"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Method"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Path"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Category"}),n.jsx(h.td,{children:"GET"}),n.jsx(h.td,{children:"api/v4.0/categories"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Category by Product"}),n.jsx(h.td,{children:"GET"}),n.jsx(h.td,{})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Brand"}),n.jsx(h.td,{children:"GET"}),n.jsx(h.td,{children:"api/v4.0/brands"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Brand by Product"}),n.jsx(h.td,{children:"GET"}),n.jsx(h.td,{})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Brand by Category"}),n.jsx(h.td,{children:"GET"}),n.jsxs(h.td,{children:["api/v4.0/categories/",n.jsx(h.categoryid,{}),"/brands"]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Brand detail"}),n.jsx(h.td,{children:"GET"}),n.jsxs(h.td,{children:["api/v4.0/brands/",n.jsx(h.brandid,{})]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Product list"}),n.jsx(h.td,{children:"GET"}),n.jsx(h.td,{children:"api/v4.0/products"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Product detail"}),n.jsx(h.td,{children:"GET"}),n.jsxs(h.td,{children:["api/v4.0/products/",n.jsx(h.productid,{})]})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Store by Product"}),n.jsx(h.td,{children:"GET"}),n.jsxs(h.td,{children:["api/v4.0/products/",n.jsx(h.productid,{}),"/stores"]})]})]})]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Các API phát hành/ kiểm tra thông tin voucher"}),`
`]}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"API"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Method"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Path"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Phát hành voucher link v (single voucher link)"}),n.jsx(h.td,{children:"POST"}),n.jsx(h.td,{children:"api/v4.0/vouchers/v"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Phát hành voucher link g (group voucher link)"}),n.jsx(h.td,{children:"POST"}),n.jsx(h.td,{children:"api/v4.0/vouchers/g"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Phát hành voucher link e (e-wallet voucher link)"}),n.jsx(h.td,{children:"POST"}),n.jsx(h.td,{children:"api/v4.0/vouchers/e"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Kiểm tra (nhiều) voucher bằng transactionRefId"}),n.jsx(h.td,{children:"GET"}),n.jsxs(h.td,{children:["api/v4.0/vouchers/multiple/status/",n.jsx(h.transactionrefid,{})]})]})]})]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsx(h.li,{children:"Các API gửi voucher voucher: dùng để gửi voucher đến người dùng cuối"}),`
`]}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"API"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Method"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Path"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Send via Email"}),n.jsx(h.td,{children:"POST"}),n.jsx(h.td,{children:"api/v4.0/vouchers/send/email"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"Send via SMS"}),n.jsx(h.td,{children:"POST"}),n.jsx(h.td,{children:"/api/v4.0/vouchers/send/sms"})]})]})]}),`
`,n.jsx(h.h2,{id:"cấu-trúc-response-api",children:"Cấu trúc response API"}),`
`,n.jsxs(h.table,{children:[n.jsx(h.thead,{children:n.jsxs(h.tr,{children:[n.jsx(h.th,{children:n.jsx(h.strong,{children:"Dữ liệu"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Kiểu"})}),n.jsx(h.th,{children:n.jsx(h.strong,{children:"Mô tả"})})]})}),n.jsxs(h.tbody,{children:[n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"status"}),n.jsx(h.td,{children:"String"}),n.jsx(h.td,{children:"HTTP status"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"statusCode"}),n.jsx(h.td,{children:"Number"}),n.jsx(h.td,{children:"HTTP Status Code"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"error"}),n.jsx(h.td,{children:"String"}),n.jsx(h.td,{children:"Mã lỗi (nếu có)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"message"}),n.jsx(h.td,{children:"String"}),n.jsx(h.td,{children:"Thông báo lỗi (nếu có)"})]}),n.jsxs(h.tr,{children:[n.jsx(h.td,{children:"data"}),n.jsx(h.td,{children:"Array object"}),n.jsx(h.td,{children:"Chứa data trả về. Trong trường hợp fail, trả về []"})]})]})]})]})}function x(i={}){const{wrapper:h}={...e(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(t,{...i})}):t(i)}export{x as default,d as excerpt,o as frontmatter,l as tableOfContents};
//# sourceMappingURL=biz-api-CnNa1ikT.js.map
