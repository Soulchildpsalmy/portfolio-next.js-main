export function getIconForSkill(skill: string) {
  const skills = [
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "text-yellow-400" },
    { name: "TypeScript", icon: "devicon-typescript-plain", color: "text-blue-400" },
    { name: "NodeJS", icon: "devicon-nodejs-plain", color: "text-green-500" },
    { name: "NestJs", icon: "devicon-nestjs-plain", color: "text-red-500" },
    { name: "Express", icon: "devicon-express-original", color: "text-gray-500" },
    { name: "AdonisJs", icon: "devicon-adonis-original", color: "text-blue-500" },
    { name: "Java", icon: "devicon-java-plain", color: "text-red-600" },
    { name: "Spring Boot", icon: "devicon-spring-plain", color: "text-green-600" },
    { name: "Dropwizard", icon: "devicon-java-plain", color: "text-blue-800" },
    { name: "gRPC", icon: "devicon-google-plain", color: "text-blue-600" },
    { name: "Redis", icon: "devicon-redis-plain", color: "text-red-500" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", color: "text-green-500" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "text-blue-500" },
    { name: "IntelliJ", icon: "devicon-intellij-plain", color: "text-purple-500" },
    { name: "VSCode", icon: "devicon-vscode-plain", color: "text-blue-400" },
    { name: "Docker", icon: "devicon-docker-plain", color: "text-blue-400" },
    { name: "Git", icon: "devicon-git-plain", color: "text-blue-400" },
    { name: "Github", icon: "devicon-github-plain", color: "text-blue-400" },
    { name: "Prisma", icon: "devicon-prisma-plain", color: "text-blue-400" },
    { name: "TypeORM", icon: "devicon-typeorm-plain", color: "text-blue-400" },
    { name: "Mongoose", icon: "devicon-mongoose-plain", color: "text-red-400" },
  ];
  const found = skills.find((s) => s.name.toLowerCase() === skill.toLowerCase());
  return found || { icon: "", color: "" };
}

// function renderSkillIcon(skill: string) {
//   const skills = [
//     {
//       name: "JavaScript",
//       icon: "devicon-javascript-plain",
//       color: "text-yellow-400",
//     },
//     {
//       name: "TypeScript",
//       icon: "devicon-typescript-plain",
//       color: "text-blue-500",
//     },
//     {
//       name: "Node.js",
//       icon: "devicon-nodejs-plain",
//       color: "text-green-500",
//     },
//     {
//       name: "NestJS",
//       icon: "devicon-nestjs-plain",
//       color: "text-red-500",
//     },
//     {
//       name: "Express.js",
//       icon: "devicon-express-original",
//       color: "text-gray-500",
//     },
//     {
//       name: "Java",
//       icon: "devicon-java-plain",
//       color: "text-red-600",
//     },
//     {
//       name: "Spring Boot",
//       icon: "devicon-spring-plain",
//       color: "text-green-600",
//     },
//     {
//       name: "Dropwizard",
//       icon: "devicon-java-plain",
//       color: "text-blue-800",
//     },
//     {
//       name: "gRPC",
//       icon: "devicon-google-plain",
//       color: "text-blue-600",
//     },
//     {
//       name: "Redis",
//       icon: "devicon-redis-plain",
//       color: "text-red-500",
//     },
//     {
//       name: "MongoDB",
//       icon: "devicon-mongodb-plain",
//       color: "text-green-500",
//     },
//     {
//       name: "PostgreSQL",
//       icon: "devicon-postgresql-plain",
//       color: "text-blue-500",
//     },
//     {
//       name: "IntelliJ",
//       icon: "devicon-intellij-plain",
//       color: "text-purple-500",
//     },
//     {
//       name: "VS Code",
//       icon: "devicon-vscode-plain",
//       color: "text-blue-400",
//     },
//   ];

//   const found = skills.find((s) => s.name.toLowerCase() === skill.toLowerCase());

//   if (found) {
//     return <i className={`${found.icon} ${found.color}`} />;
//   } else {
//     return <span role="img" aria-label="tool">🔧</span>;
//   }
// }