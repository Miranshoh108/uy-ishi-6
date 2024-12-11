// 1 - masala;
// function x(s) {
//   const y = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let a = 0;
//   let b = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     const c = y[s[i]];

//     if (c < b) {
//       a -= c;
//     } else {
//       a += c;
//     }

//     b = c;
//   }

//   return a;
// }

// console.log(x("ML"));

// 2-masala

// function x(str) {
//     if (str.length === 0) return "";

//     let a = str[0];

//     for (let i = 1; i < str.length; i++) {
//         while (str[i].indexOf(a) !== 0) {
//             a = a.substring(0, a.length - 1);
//             if (a === "") return "";
//         }
//     }

//     return a;
// }

// console.log(x(["flower", "flow", "flight"]));

// 3-masala

// function add(s) {
//     s = s.trim();

//     const a = s.split(" ");

//     return a[a.length - 1].length;
// }

// console.log(add("Hello World"));

// 4-masal

// function add(s) {
//   const a = s.toLowerCase().replace(/[^a-z0-9]/g, "");

//   let left = 0;
//   let right = a.length - 1;

//   while (left < right) {
//     if (a[left] !== a[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(add("A man, a plan, a canal: Panama"));
// console.log(add("race a car"));
