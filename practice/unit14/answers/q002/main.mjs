// addTaxとformatYenを名前付きimportしてください。
// formatYenにはtoYenLabelという別名を付けてください。
import {addTax, formatYen as toYenLabel} from "./price-utils.mjs";

const price = 1000;

// ここで税込価格を求め、円表記へ変換してください。

const label = toYenLabel(addTax(price));
console.log(label);

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
