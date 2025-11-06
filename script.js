'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


// Q1
/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */
function getNames() {
  return allPokemon.map(v => v.Name);
}

test(getNames(), getNamesExpected);



// Q2
/**
 * @param {string} ??? - ポケモンの名前
 * @returns {object} 与えられた名前を持つポケモンのオブジェクト
 */
function getPokemonByName(name) {
  return allPokemon.find(v => v.Name === name);
}
test(getPokemonByName("Pikachu"), getPokemonByNameExpected);



// Q3
/**
 * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
 */
function getAvgMaxCP() {
  return allPokemon.map(v => v.MaxCP).reduce((acc, curr) => acc + curr) / allPokemon.length;
}
// コンピュータは内部で 2 進法を使っているため、10 進法の小数点以下の計算で誤差がでることがあります。

// そのため近似値であれば合格とします。期待値と全く同じでないとテストに通らずエラーが出てしまうので、テストをコメントアウトして外してください。

test(getAvgMaxCP(), getAvgMaxCPExpected);

// Q4
/**
 * @param {string} attack（技）
 * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
 */
function getResistantPokemon(attack) {
  return allPokemon.filter(v => v.Resistant.findIndex(v => v === attack) > -1 );
}
test(getResistantPokemon("Fire"), getResistantPokemonExpected);



// Q5
/**
 * @param {string} attack（技）
 * @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
 */
function getResistantPokemonNames(attack) {
  return getResistantPokemon(attack).map(v => v.Name)
}
test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);


// Q1?
/**
 * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキーと値のペアで表現したオブジェクト
 */
function getWeaknessCounts() {
  return allPokemon.reduce((acc, {Weaknesses}) => {
    Weaknesses.forEach(weakness => acc[weakness] = (acc[weakness] || 0 ) + 1);
    return acc;
  }, {});
}

// function getWeaknessCounts() {
//   const result = {};
//   allPokemon.forEach(v => {
//     v.Weaknesses.forEach(weak => {
//       if (Object.hasOwn(result, weak)) {
//         result[weak] = result[weak] + 1
//       } else {
//         result[weak] = 1
//       }
//     })
//   })
//   return result;
// }
test(getWeaknessCounts(), getWeaknessCountsExpected);


// 中級演習1, 中級演習2
// for => forEach()

// 応用演習1, 応用演習2
// .map, .filter, .forEach, .reduce









