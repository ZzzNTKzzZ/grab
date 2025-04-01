const navbar = document.querySelector(".navbar");
const menuItems = document.querySelector(".menu-items");
const partnerItems = document.querySelector(".partner");
const data = {
  categories: [
    {
      heading: "Về Grab",
      content: [
        {
          title: "Câu chuyện của Grab",
          description:
            "Chúng tôi là ai và chúng tôi mong muốn mang đến điều gì",
        },
        {
          title: "Inside Grab",
          description: "Thông tin và câu chuyện từ blog chính thức của Grab",
        },
        {
          title: "Quan hệ đầu tư",
          description: "Thông tin cho các nhà đầu tư",
        },
        {
          title: "Địa chỉ",
          description: "Văn phòng Grab tại các thành phố và quốc gia",
        },
        {
          title: "Tin tưởng & An toàn",
          description: "Các chính sách nhằm đảm bảo sự an toàn cho bạn",
        },
        {
          title: "Tác động",
          description:
            "Chúng tôi đã tạo ra những tác động tích cực tới cộng đồng như thế nào",
        },
        {
          title: "Tin tức",
          description: "Cập nhật những tin tức và thông báo mới nhất",
        },
        {
          title: "Làm việc tại Grab",
          description: "Cùng chúng tôi đưa Đông Nam Á phát triển và vươn xa",
        },
        {
          title: "GrabForGood Fund",
          description:
            "Quỹ tài trợ của chúng tôi ủng hộ các cộng đồng ở Đông Nam Á",
        },
      ],
    },
    {
      heading: "Người dùng",
      content: [
        {
          title: "Có gì mới?",
          description:
            "Cập nhật các thông tin, sự kiện nổi bật cùng các ưu đãi hấp dẫn",
        },
        {
          title: "Di chuyển",
          description:
            "Tất tần tật về các dịch vụ phục vụ nhu cầu đi lại của bạn",
        },
        { title: "GrabFood", description: "Thưởng thức món ngon ngay tại nhà" },
        { title: "GrabMart", description: "Cần gì đặt là có ngay" },
        {
          title: "GrabExpress",
          description: "Dịch vụ giao hàng nhanh chóng và tiện lợi",
        },
        {
          title: "Ví điện tử Moca trên ứng dụng Grab",
          description: "Thanh toán dễ dàng, chẳng cần tiền mặt",
        },
        {
          title: "GrabRewards",
          description:
            "Tận hưởng vô vàn ưu đãi hấp dẫn chỉ dành riêng cho người dùng Grab.",
        },
        {
          title: "Tính năng mới",
          description:
            "Khám phá các cập nhật mới nhất về tính năng, dịch vụ và cải tiến",
        },
      ],
    },
    {
      heading: "Đối tác tài xế",
      content: [
        {
          title: "Thông tin mới nhất",
          description:
            "Cập nhật mọi thông báo mới nhất liên quan đến các Đối tác tài xế Grab",
        },
        { title: "Di chuyển", description: "Làm chủ tài chính và thời gian." },
        {
          title: "GrabFood",
          description: "Kiếm thêm thu nhập với dịch vụ giao thức ăn.",
        },
        {
          title: "GrabExpress",
          description: "Kiếm nhiều hơn nữa với dịch vụ giao hàng.",
        },
        {
          title: "Trung tâm tài xế",
          description: "Tìm trung tâm tài xế gần bạn",
        },
      ],
    },
    {
      heading: "Hợp tác cùng Grab",
      content: [
        {
          title: "GrabFood",
          description:
            "Tăng doanh thu khi mở quán ăn trên Grab và tiếp cận hàng triệu người dùng",
        },
        {
          title: "GrabMart",
          description:
            "Phát triển doanh nghiệp của bạn bằng cách đưa hàng hóa đến tận tay người tiêu dùng",
        },
        {
          title: "Hướng dẫn",
          description:
            "Tìm hiểu cách sử dụng Ứng dụng GrabMerchant và Cổng thông tin GrabMerchant",
        },
        {
          title: "Financing",
          description:
            "Kinh doanh vững vàng hơn cùng chương trình Hỗ trợ tài chính do Grab hợp tác cùng Ngân hàng VietinBank",
        },
        {
          title: "Blog",
          description:
            "Cập nhật các xu hướng mới nhất trong ngành thực phẩm và lấy cảm hứng từ những câu chuyện thành công của Đối tác khác",
        },
      ],
    },
    {
      heading: "Doanh nghiệp và Công ty",
      content: [
        {
          title: "Grab for Business",
          description:
            "Trải nghiệm dịch vụ Grab được thiết kế phù hợp với nhu cầu riêng của doanh nghiệp.",
        },
        {
          title: "GrabAds",
          description: "Hợp tác quảng cáo trực tuyến, offline",
        },
        {
          title: "GrabGifts",
          description:
            "Tặng phiếu ưu đãi Grab cho khách hàng, đối tác và nhân viên của bạn.",
        },
        {
          title: "GrabExpress",
          description:
            "Đặt giao hàng và quản lý các đơn hàng cho công ty của bạn",
        },
        {
          title: "GrabMaps",
          description:
            "Công nghệ bản đồ siêu địa phương và giải pháp dữ liệu vị trí cho doanh nghiệp",
        },
      ],
    },
  ],
};
function generateMenu(data) {
  let menuHTML = document.createElement("div");
  menuHTML.className = "menu-content popup-menu";
  let contentList = `<ul id="menu-list">`;
  data.categories.forEach((category, index) => {
    contentList += `<li role="menuitem" data-index="${index}">${category.heading}</li>`;
  });
  contentList += `</ul>`;
  menuHTML.innerHTML = contentList;

  const firstListItem = menuHTML.querySelector("li");
  if (firstListItem) {
    firstListItem.classList.add("select");
    menuHTML.appendChild(generateListContent(data.categories[0]));
  }

  menuHTML.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function (e) {
      let selectedCategory = data.categories.find(
        (category) => category.heading === item.textContent
      );
      menuHTML.querySelectorAll("li").forEach((li) => li.classList.remove("select"));
      e.target.classList.add("select");
      
      if (selectedCategory) {
        let oldContent = document.querySelector(".list-content");
        if (oldContent) oldContent.remove();
        menuHTML.appendChild(generateListContent(selectedCategory));
      }
    });
  });
  return menuHTML;
}

function generateListContent(category) {
  let listContent = document.createElement("div");
  listContent.className = "list-content";
  let contentList = "";
  category.content.forEach((item) => {
    contentList += `<div class="list-box">
                      <div class="box-title">${item.title}</div>
                      <div class="box-content">${item.description}</div>
                  </div>`;
  });
  listContent.innerHTML = contentList;
  return listContent;
}

function generatePartnerMenu() {
  let div = document.createElement("div");
  div.classList.add("partner-menu", "popup-menu");
  div.innerHTML = `<ul>
        <li>Tư vấn đăng ký</li>
        <li>Đăng ký làm tài xế Grab</li>
        <li>Đối tác GrabBike | GrabExpress</li>
        <li>Đăng ký làm đối tác GrabFood</li>
        <li>Đăng ký làm đối tác GrabMart</li>
        <li>Đăng ký hợp tác với GrabRewards</li>
    </ul>`;
  return div;
}

menuItems.onclick = function () {
  const existingMenu = document.querySelector(".menu-content");
  const existingPartnerMenu = document.querySelector(".partner-menu");

  if (existingPartnerMenu) {
    existingPartnerMenu.remove();
  }

  if (existingMenu) {
    existingMenu.remove();
  } else {
    menuItems.appendChild(generateMenu(data));
  }
};

partnerItems.onclick = function () {
  const existingPartnerMenu = document.querySelector(".partner-menu");
  const existingMenu = document.querySelector(".menu-content");

  if (existingMenu) {
    existingMenu.remove();
  }

  if (existingPartnerMenu) {
    existingPartnerMenu.remove();
  } else {
    partnerItems.appendChild(generatePartnerMenu());
  }
};

document.body.addEventListener("click", function (event) {
  const menuContent = document.querySelector(".popup-menu");
  if (
    menuContent &&
    !menuItems.contains(event.target) &&
    !partnerItems.contains(event.target) &&
    !menuContent.contains(event.target)
  ) {
    menuContent.remove();
  }
});