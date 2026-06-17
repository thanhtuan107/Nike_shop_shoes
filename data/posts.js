// Blog posts for the EKiN "Tạp chí" (magazine).
// Content mirrors the design reference (Nikeshop Blog.dc.html → POSTS).
// body[] blocks: type 'h' = heading, 'p' = paragraph, 'q' = blockquote.

const posts = [
  {
    id: 1,
    slug: 'xu-huong-giay-sneaker-2026',
    category: 'Xu hướng',
    title: 'Xu hướng giày sneaker 2026: Nhẹ hơn, nhanh hơn, bền vững hơn',
    date: '12 Th6, 2026',
    read: '6 phút đọc',
    image: '/product/nike_alphafly_3.avif',
    excerpt:
      'Năm 2026 đánh dấu bước nhảy của công nghệ đế giữa siêu nhẹ và vật liệu tái chế. Cùng điểm qua những xu hướng định hình thị trường sneaker năm nay.',
    body: [
      { type: 'h', text: 'Đế giữa siêu nhẹ lên ngôi' },
      {
        type: 'p',
        text: 'Các dòng đế bọt thế hệ mới như ZoomX và FuelCell tiếp tục được tinh chỉnh, giảm trọng lượng tới 15% so với 2024 mà vẫn giữ độ hoàn trả năng lượng. Một đôi giày chạy đường dài nay chỉ còn dưới 200g — điều từng bất khả thi vài năm trước.',
      },
      { type: 'h', text: 'Vật liệu bền vững thành tiêu chuẩn' },
      {
        type: 'p',
        text: 'Không còn là điểm cộng, vật liệu tái chế giờ là mặc định. Upper dệt từ sợi nhựa thu hồi đại dương, đế cao su pha bột lốp tái chế — người tiêu dùng 2026 chọn giày bằng cả lương tâm môi trường.',
      },
      {
        type: 'q',
        text: '“Một đôi giày tốt giờ phải vừa nhanh, vừa nhẹ, vừa tử tế với hành tinh.”',
      },
      { type: 'h', text: 'Thiết kế tối giản, màu trung tính' },
      {
        type: 'p',
        text: 'Bảng màu 2026 nghiêng về trắng kem, xám đá và đen tuyền — dễ phối, hợp cả phòng gym lẫn phố. Swoosh và chi tiết phản quang được tiết chế, nhường chỗ cho phom dáng sạch sẽ.',
      },
    ],
  },
  {
    id: 2,
    slug: 'cach-chon-size-giay-chuan',
    category: 'Hướng dẫn',
    title: 'Cách chọn size giày chuẩn: Đừng để 1 size làm hỏng cả buổi chạy',
    date: '08 Th6, 2026',
    read: '5 phút đọc',
    image: '/product/nike_pegarsus42.avif',
    excerpt:
      'Chọn sai size là lỗi phổ biến nhất khi mua giày online. Đây là quy trình 4 bước để tìm đúng size, kể cả khi bạn không thể thử trực tiếp.',
    body: [
      { type: 'h', text: '1. Đo chân vào buổi chiều' },
      {
        type: 'p',
        text: 'Bàn chân nở ra tới 4% sau một ngày hoạt động. Đo vào buổi chiều tối cho con số sát thực tế nhất khi bạn mang giày đi chạy hoặc đi làm.',
      },
      { type: 'h', text: '2. Đo cả chiều dài và chiều rộng' },
      {
        type: 'p',
        text: 'Đặt chân lên tờ giấy, kẻ vạch ở gót và ngón dài nhất, đo khoảng cách (cm). Đừng quên đo bề ngang — nhiều người sai size chỉ vì chân bè mà chọn theo chiều dài.',
      },
      { type: 'h', text: '3. Chừa khoảng “thumb rule”' },
      {
        type: 'p',
        text: 'Để trống khoảng một ngón tay cái (~1–1.5cm) giữa ngón dài nhất và mũi giày. Chạy đường dài chân sẽ nở; quá khít sẽ gây đen móng và phồng rộp.',
      },
      {
        type: 'q',
        text: '“Chọn size theo số đo bàn chân, không theo size đôi giày cũ — mỗi hãng, mỗi dòng có phom khác nhau.”',
      },
      { type: 'h', text: '4. Đối chiếu bảng size từng hãng' },
      {
        type: 'p',
        text: 'Cùng “size 42” nhưng Nike, Adidas và New Balance dài ngắn khác nhau. Luôn quy đổi số đo cm của bạn sang bảng size riêng của từng hãng trước khi đặt mua.',
      },
    ],
  },
  {
    id: 3,
    slug: 've-sinh-bao-quan-giay-trang',
    category: 'Bảo quản',
    title: 'Vệ sinh & bảo quản giày trắng: Giữ mới như ngày đầu',
    date: '03 Th6, 2026',
    read: '4 phút đọc',
    image: '/product/nike_airmax.avif',
    excerpt:
      'Giày trắng đẹp nhưng nhanh bẩn. Vài thói quen đơn giản giúp đôi sneaker trắng của bạn luôn sạch tinh mà không hỏng chất liệu.',
    body: [
      { type: 'h', text: 'Làm sạch ngay khi vừa bẩn' },
      {
        type: 'p',
        text: 'Vết bẩn để lâu sẽ ăn vào sợi vải. Lau nhẹ bằng khăn ẩm và một chút xà phòng trung tính ngay sau khi dính bẩn là cách phòng ngừa tốt nhất.',
      },
      { type: 'h', text: 'Đừng cho vào máy giặt' },
      {
        type: 'p',
        text: 'Máy giặt làm bong keo và biến dạng phom. Hãy giặt tay với bàn chải lông mềm, chà theo một chiều, tập trung vào đế và các đường chỉ.',
      },
      { type: 'h', text: 'Phơi nơi thoáng, tránh nắng gắt' },
      {
        type: 'p',
        text: 'Ánh nắng trực tiếp làm ngả vàng phần đế và upper trắng. Nhét giấy báo vào trong để hút ẩm và giữ phom, phơi nơi râm mát có gió.',
      },
    ],
  },
  {
    id: 4,
    slug: 'giay-chay-bo-vs-giay-tap-gym',
    category: 'Hiệu năng',
    title: 'Giày chạy bộ vs giày tập gym: Chọn đúng cho từng mục tiêu',
    date: '28 Th5, 2026',
    read: '5 phút đọc',
    image: '/product/nike_structure_plus.avif',
    excerpt:
      'Mang giày chạy vào phòng tạ hay ngược lại đều có thể gây chấn thương. Hiểu sự khác biệt để chọn đúng đôi cho mục tiêu của bạn.',
    body: [
      { type: 'h', text: 'Giày chạy: Đệm dày, hướng tới trước' },
      {
        type: 'p',
        text: 'Thiết kế để hấp thụ lực dội khi tiếp đất và đẩy bạn về phía trước. Đế cao, mềm và cong — tuyệt cho đường dài nhưng kém ổn định khi nâng tạ nặng.',
      },
      { type: 'h', text: 'Giày tập gym: Đế phẳng, bám chắc' },
      {
        type: 'p',
        text: 'Đế thấp, cứng và rộng giúp giữ thăng bằng khi squat, deadlift hay đổi hướng nhanh. Ưu tiên sự ổn định hơn là đệm êm.',
      },
      {
        type: 'q',
        text: '“Một đôi giày đa năng vẫn thua một đôi chuyên dụng khi bạn tập nghiêm túc.”',
      },
      { type: 'h', text: 'Khi nào cần đôi thứ hai?' },
      {
        type: 'p',
        text: 'Nếu bạn chạy hơn 20km/tuần hoặc nâng tạ đều đặn, hãy đầu tư hai đôi riêng. Đôi chân — và thành tích — của bạn sẽ cảm ơn quyết định đó.',
      },
    ],
  },
]

export const TOPICS = ['Xu hướng', 'Hướng dẫn', 'Bảo quản', 'Hiệu năng']

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}

export default posts
