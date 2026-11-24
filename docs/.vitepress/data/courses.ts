// 上科大信息学院 IC 相关课程（2026-2027 学年开课计划）。
// 来源：https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm
// 官方表注明“开课有不确定因素，以教务系统为准”；授课教师每学年会变化。
// areas 取值见 courseAreas；page 字段指向本站课程详情页。

export interface Course {
  code: string
  name: string
  en: string
  level: '本科' | '研究生'
  type: '必修' | '三选二' | '选修'
  credit: string
  semester: string
  instructors: string
  prereq: string
  areas: string[]
  page?: string
}

export const courseAreas: Record<string, string> = {
  basic: '专业基础',
  digital: '数字电路与芯片',
  arch: '体系结构与系统',
  ai: 'AI 与智能计算',
  analog: '模拟与混合信号',
  rf: '电磁与射频',
  power: '电力电子与电源',
  device: '器件与工艺',
  photonics: '光电子与光子',
  mems: 'MEMS 与柔性电子',
  eda: 'EDA 与优化'
}

export const courses: Course[] = [
  { code: "CS100", name: "计算机编程", en: "Introduction to Programming", level: "本科", type: "必修", credit: "4", semester: "秋/春", instructors: "张芯韵、许岚、马月昕", prereq: "None", areas: ["basic"] },
  { code: "SI100B", name: "信息科学技术导论", en: "Introduction to Information Science and Technology", level: "本科", type: "必修", credit: "4", semester: "秋/春", instructors: "何旭明、屠可伟、娄鑫、刘闯、陆林燕、李正浩、林竹雨、范睿", prereq: "None", areas: ["basic", "digital"], page: "/shanghaitech/courses/si100b" },
  { code: "EE111", name: "电路基础", en: "Electric Circuits", level: "本科", type: "必修", credit: "4", semester: "秋/春", instructors: "邹新波、叶朝锋、朱晔、刘宇", prereq: "Physics", areas: ["basic", "analog"] },
  { code: "EE111L", name: "电路基础实验", en: "Electric Circuits Lab", level: "本科", type: "必修", credit: "1", semester: "秋/春", instructors: "李娟", prereq: "Physics", areas: ["basic"] },
  { code: "SI140A", name: "面向信息科学的概率论与数理统计", en: "Probability and Statistics for Information Science", level: "本科", type: "必修", credit: "4", semester: "春/秋", instructors: "邵子瑜、吴幼龙、文鼎柱、Xavier Lagorce", prereq: "Mathematical Analysis II,Linear Algebra, 编程基础知识", areas: ["basic"] },
  { code: "CS110A", name: "计算机系统架构 (H)", en: "Introduction to Computer Systems(H)", level: "本科", type: "必修", credit: "4", semester: "秋", instructors: "王春东", prereq: "", areas: ["arch"] },
  { code: "EE150", name: "信号与系统", en: "Signals and Systems", level: "本科", type: "必修", credit: "4", semester: "春/秋", instructors: "周勇、毛奕婕、徐林、蔡夕然", prereq: "Mathematical Analysis II,Linear Algebra", areas: ["basic"], page: "/shanghaitech/courses/ee150" },
  { code: "EE150L", name: "信号与系统实验", en: "Signals and Systems Lab", level: "本科", type: "必修", credit: "1", semester: "春/秋", instructors: "陆林燕", prereq: "Mathematical Analysis II,Linear Algebra", areas: ["basic"], page: "/shanghaitech/courses/ee150" },
  { code: "CS110", name: "计算机体系结构I", en: "Computer Architecture I", level: "本科", type: "必修", credit: "4", semester: "春", instructors: "刘思廷、肖原", prereq: "CS100", areas: ["basic", "arch"], page: "/shanghaitech/courses/cs110" },
  { code: "CS110P", name: "计算机体系结构I课程设计", en: "Computer Architecture I Project", level: "本科", type: "必修", credit: "2", semester: "春", instructors: "刘思廷、肖原", prereq: "CS100", areas: ["arch"] },
  { code: "EE115A", name: "模拟电路", en: "Analog Circuits", level: "本科", type: "必修", credit: "3", semester: "秋/春", instructors: "王浩宇、刘闯、寇煦丰", prereq: "EE111", areas: ["basic", "analog"], page: "/shanghaitech/courses/ee115a" },
  { code: "EE115B", name: "数字电路", en: "Digital Circuits", level: "本科", type: "必修", credit: "3", semester: "秋/春", instructors: "杨恒昭、李娟、肖晨曦", prereq: "EE111", areas: ["basic", "digital"], page: "/shanghaitech/courses/ee115b" },
  { code: "EE130", name: "电磁学", en: "Electromagnetics", level: "本科", type: "必修", credit: "4", semester: "秋/春", instructors: "王雄、林丰涵", prereq: "Mathematical Analysis II", areas: ["basic", "rf"] },
  { code: "EE130P", name: "电磁学课程设计", en: "Electromagnetics Project", level: "本科", type: "必修", credit: "2", semester: "秋/春", instructors: "王雄、李娟、林丰涵", prereq: "Mathematical Analysis II", areas: ["basic", "rf"] },
  { code: "EE120", name: "半导体器件基础", en: "Fundamentals of Semiconductor Devices", level: "本科", type: "三选二", credit: "4", semester: "春/秋", instructors: "杨雨梦、陈佰乐", prereq: "Physics II, or EE130", areas: ["device"] },
  { code: "CS121", name: "并行计算", en: "Parallel Computing", level: "本科", type: "选修", credit: "4", semester: "秋", instructors: "范睿", prereq: "CS100,CS101(recommended)", areas: ["arch"] },
  { code: "CS130", name: "操作系统I", en: "Operating Systems I", level: "本科", type: "选修", credit: "4", semester: "秋/春", instructors: "殷树、何静竹", prereq: "CS100,CS101,CS110", areas: ["arch"] },
  { code: "CS131", name: "编译原理", en: "Compilers", level: "本科", type: "选修", credit: "4", semester: "秋", instructors: "陈浩贤", prereq: "CS100", areas: ["arch"] },
  { code: "EE112", name: "模拟集成电路I", en: "Analog Integrated Circuits", level: "本科", type: "选修", credit: "4", semester: "春", instructors: "吕宏鸣", prereq: "EE111,EE150,EE115A(建议)", areas: ["analog"] },
  { code: "EE113", name: "数字集成电路I", en: "Digital Integrated Circuit Design", level: "本科", type: "选修", credit: "4", semester: "秋", instructors: "任轩乐", prereq: "EE111,EE115", areas: ["digital"], page: "/shanghaitech/courses/ee113" },
  { code: "EE113L", name: "数字集成电路I实验", en: "Digital Integrated Circuit Design Lab", level: "本科", type: "选修", credit: "1", semester: "秋", instructors: "冯娜", prereq: "EE111", areas: ["digital"], page: "/shanghaitech/courses/ee113" },
  { code: "EE114", name: "嵌入式系统", en: "Introduction to Embedded Systems", level: "本科", type: "选修", credit: "4", semester: "春", instructors: "吴涛、刘闯", prereq: "EE111,CS100", areas: ["digital", "arch"] },
  { code: "EE114P", name: "嵌入式系统课程设计", en: "Introduction to Embedded Systems Project", level: "本科", type: "选修", credit: "2", semester: "夏", instructors: "吴涛、刘闯", prereq: "EE111,CS100", areas: ["digital"] },
  { code: "EE116", name: "基于FPGA的硬件系统设计", en: "FPGA-based Hardware System Design", level: "本科", type: "选修", credit: "4", semester: "春", instructors: "哈亚军、李娟", prereq: "EE115A,EE115B", areas: ["digital"] },
  { code: "—", name: "光电芯片", en: "", level: "本科", type: "选修", credit: "3", semester: "春", instructors: "邹毅", prereq: "", areas: ["photonics"] },
  { code: "EE131H", name: "物理光学", en: "Physical Optics", level: "本科", type: "选修", credit: "3", semester: "春", instructors: "陆娟娟", prereq: "EE130", areas: ["photonics"] },
  { code: "EE152", name: "数字信号处理", en: "Digital Signal Processing", level: "本科", type: "选修", credit: "4", semester: "春", instructors: "任无畏", prereq: "EE150", areas: ["basic"] },
  { code: "EE171", name: "电力电子", en: "Power Electronics", level: "本科", type: "选修", credit: "4", semester: "春", instructors: "傅旻帆", prereq: "EE111", areas: ["power"] },
  { code: "CS210", name: "计算机体系结构III", en: "Computer Architecture III", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "殷树", prereq: "CS110,CS130,CS100", areas: ["arch"] },
  { code: "CS280", name: "深度学习", en: "Deep Learning", level: "研究生", type: "选修", credit: "4", semester: "春/秋", instructors: "王锴、许岚", prereq: "At least one of CS182/CS282/CS181", areas: ["ai"] },
  { code: "CS290U", name: "深度学习工程实践", en: "Project Practice for Deep Learning", level: "研究生", type: "选修", credit: "3", semester: "秋", instructors: "师玉娇", prereq: "CS280", areas: ["ai"], page: "/shanghaitech/courses/cs290u" },
  { code: "EE213", name: "数字集成电路II", en: "Digital Integrated Circuits II", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "祝智峰、冯娜", prereq: "EE113，建议先修说明：EE115B, Circuit Analysis", areas: ["digital"] },
  { code: "EE215A", name: "集成电路设计自动化", en: "VLSI Design Automation", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "耿浩", prereq: "CS100,EE111,掌握基本数据结构算法", areas: ["eda"] },
  { code: "EE216", name: "可重构计算", en: "Reconfigurable Computing", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "哈亚军", prereq: "EE116", areas: ["digital", "arch"] },
  { code: "EE212", name: "模拟集成电路II", en: "Analog Integrated Circuits II", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "吕宏鸣", prereq: "EE112,EE150", areas: ["analog"] },
  { code: "EE219", name: "智能计算系统", en: "Artificial Intelligence Computing Systems", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "刘思廷", prereq: "Linear Algebra,Probability and Statistics, EE113, 推荐CS100/110,并推荐掌握verilog/VHDL任意硬件编程语言和有一定的python编程基础", areas: ["ai", "arch", "digital"], page: "/shanghaitech/courses/ee219" },
  { code: "EE220", name: "半导体器件物理", en: "Physics of Semiconductor Devices", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "杨雨梦", prereq: "Semiconductor Material and Devices,Principles of Semiconductor Physics, or Solid State Physics或同等课程", areas: ["device"] },
  { code: "EE222", name: "光电器件II", en: "Optoelectronic Devices II", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "王成", prereq: "Physics II", areas: ["photonics"] },
  { code: "EE224A", name: "微纳器件工艺基础", en: "Micro/Nano Processing Technology", level: "研究生", type: "选修", credit: "3", semester: "秋", instructors: "廖立杨", prereq: "Physics I, Chemistry I", areas: ["device", "mems"] },
  { code: "EE224B", name: "微纳机电系统基础", en: "Introduction to MEMS Design", level: "研究生", type: "选修", credit: "3", semester: "秋", instructors: "吴涛", prereq: "EE111", areas: ["mems"] },
  { code: "EE224J", name: "微纳机电系统实验", en: "Introduction to MEMS Design Lab", level: "研究生", type: "选修", credit: "1", semester: "秋", instructors: "吴涛、孙璐、刘锋昱", prereq: "EE224B", areas: ["mems"] },
  { code: "EE224G", name: "微机电系统设计进阶与实践", en: "Advanced MEMS Design and Practice", level: "研究生", type: "选修", credit: "2", semester: "春", instructors: "吴涛、李昕欣（特聘）、于游（BME）", prereq: "None", areas: ["mems"] },
  { code: "EE228", name: "激光器与激光动力学", en: "Lasers and Laser Dynamics", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "王成", prereq: "Physics II", areas: ["photonics"] },
  { code: "EE229", name: "柔性电子学", en: "Stretchable Electronics", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "曹文翰", prereq: "Physics，EE111", areas: ["mems"] },
  { code: "EE2210", name: "数字集成电路可测性设计", en: "Testable Design for Digital Integrated Circuits", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "任轩乐", prereq: "EE113", areas: ["digital", "eda"] },
  { code: "EE2211", name: "微电子器件", en: "Microelectronic Devices", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "曹文翰", prereq: "EE111,Physics", areas: ["device"] },
  { code: "EE2212", name: "纳米光子学及器件", en: "Nanophotonics and Devices", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "曲俞睿", prereq: "EE130，EE131H", areas: ["photonics"] },
  { code: "EE230", name: "微波工程I", en: "Microwave Engineering I", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "王雄", prereq: "EE130", areas: ["rf"] },
  { code: "EE234B", name: "天线理论与设计", en: "Antenna Theory and Design", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "林丰涵", prereq: "EE130,EE111", areas: ["rf"] },
  { code: "EE237", name: "自旋电子学", en: "Spintronics", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "祝智峰、孙璐", prereq: "EE120/EE220,EE111,Calculus,Linear Algebra,Physics I", areas: ["device"] },
  { code: "EE239B", name: "非线性光学及其器件", en: "Nonlinear Optics Devices", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "陆娟娟", prereq: "EE130,固体物理，量子力学", areas: ["photonics"] },
  { code: "EE270", name: "电力电子变换器建模与控制", en: "Power Electronic Converters Modeling and Control", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "朱晔", prereq: "EE111", areas: ["power"] },
  { code: "EE273", name: "高级电能变换技术", en: "Advanced Power Conversion Techniques", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "傅旻帆", prereq: "EE171", areas: ["power"] },
  { code: "EE290C", name: "导波光学", en: "Guided Wave Optics", level: "研究生", type: "选修", credit: "4", semester: "秋", instructors: "邹毅", prereq: "EE131", areas: ["photonics"] },
  { code: "EE291C", name: "量子信息导论", en: "Introduction to Quantum Information", level: "研究生", type: "选修", credit: "4", semester: "春", instructors: "廖立杨", prereq: "EE130,EE131H,EE120,Linear Algebra", areas: ["device"] },
  { code: "EE291J/B", name: "芯片测试入门与实践", en: "Chip Testing：Fundamentals and Applications", level: "研究生", type: "选修", credit: "2", semester: "秋/春", instructors: "孙璐、刘锋昱", prereq: "Physics II, EE130", areas: ["device", "digital"] },
  { code: "EE291F", name: "数字VLSI设计流程", en: "Digital VLSI Design Flow", level: "研究生", type: "选修", credit: "2", semester: "秋/春", instructors: "娄鑫、冯娜", prereq: "EE113", areas: ["digital", "eda"], page: "/shanghaitech/courses/ee291f" },
  { code: "EE291H", name: "板级电路设计实践", en: "Board-Level Circuit Design", level: "研究生", type: "选修", credit: "3", semester: "秋", instructors: "肖晨曦", prereq: "EE111,EE115A,EE115B,EE171,EE114", areas: ["analog", "digital"] },
  { code: "SI231B", name: "矩阵计算", en: "Matrix Computations", level: "研究生", type: "选修", credit: "4", semester: "春/秋", instructors: "赵子平、陆疌", prereq: "Mathematical Analysis I,Linear Algebra", areas: ["eda"] },
  { code: "SI251", name: "凸优化", en: "Convex Optimization", level: "研究生", type: "选修", credit: "4", semester: "秋/春", instructors: "石野、石远明", prereq: "Mathematical Analysis I,Mathematical Analysis II, Linear Algebra,SI151A", areas: ["eda"] },
  { code: "SI362", name: "光计算与光神经网络", en: "Optical Computing and Optical Neural Network", level: "研究生", type: "选修", credit: "3", semester: "春", instructors: "曲俞睿", prereq: "None", areas: ["photonics", "ai"] },
  { code: "SI365", name: "人工智能赋能集成电路设计制造", en: "AI for Integrated Circuit", level: "研究生", type: "选修", credit: "3", semester: "春", instructors: "张芯韵", prereq: "EE115B,CS280,CS282", areas: ["eda", "ai"] },
  { code: "CS290W", name: "人工智能硬件部署工程实践", en: "Engineering Practice of AI Hardware Deployment", level: "研究生", type: "选修", credit: "2", semester: "春", instructors: "杨智策", prereq: "CS121,CS181", areas: ["ai"] },
  { code: "EE291I", name: "模拟集成电路工程设计", en: "Analog Integrated Circuit Engineering Design", level: "研究生", type: "选修", credit: "2", semester: "秋", instructors: "刘闯", prereq: "", areas: ["analog"] },
]
