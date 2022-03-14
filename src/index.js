import "./styles.css";

/**
 * incomplate-areaからtargetの要素を削除する
 * @param {*} target
 */
const deleteFromIncomplateElement = (target) => {
  document.getElementById("incomplate-area").removeChild(target);
};

const createIncomplatelist = (text) => {
  // DOM生成
  // liタグの作成
  const li = document.createElement("li");
  li.className = "list-row";

  // spanタグの生成
  const span = document.createElement("span");
  span.innerText = text;

  // button（完了）タグの生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncomplateElement(complateButton.parentNode);

    // DOM生成
    // liタグの作成
    const addTarget = complateButton.parentNode;

    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const backLi = document.createElement("li");
    backLi.className = "list-row";

    const backSpan = document.createElement("span");
    backSpan.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-area").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText;
      createIncomplatelist(text);
    });

    backLi.appendChild(backSpan);
    backLi.appendChild(backButton);

    document.getElementById("complate-area").appendChild(backLi);
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

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplatelist(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
