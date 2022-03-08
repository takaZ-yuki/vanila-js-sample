import "./styles.css";

const onClickAdd = (text = "") => {
  // テキストボックスの値を取得し初期化する
  const inputText = text ? text : document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // DOM生成
  // liタグの作成
  const li = document.createElement("li");
  li.className = "list-row";

  // spanタグの生成
  const span = document.createElement("span");
  span.innerText = inputText;

  // button（完了）タグの生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    onClickComplate(complateButton.parentNode);
  });

  // button（戻す）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのliを未完了リストから削除
    deleteFromIncomplateElement(deleteButton.parentNode);
  });

  //DOM構成を作成
  li.appendChild(span);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplate-area").appendChild(li);
};

/**
 * incomplate-areaからtargetの要素を削除する
 * @param {*} target
 */
const deleteFromIncomplateElement = (target) => {
  document.getElementById("incomplate-area").removeChild(target);
};

/**
 *
 * @param {*} target
 */
const onClickComplate = (target) => {
  // DOM生成
  // liタグの作成
  const backLi = document.createElement("li");
  backLi.className = "list-row";

  const backSpan = document.createElement("span");
  backSpan.innerText = target.firstElementChild.innerText;

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", onClickBack(backSpan.innerText));

  backLi.appendChild(backSpan);
  backLi.appendChild(backButton);

  document.getElementById("complate-area").appendChild(backLi);
  deleteFromIncomplateElement(target);
};

/**
 *
 * @param {*} target
 */
const onClickBack = (text) => {
  onClickAdd(text);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
