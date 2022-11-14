window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  "cmsload",
  (listInstances) => {
    console.log("cmsload Successfully loaded!");

    // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
    const [listInstance] = listInstances;

    const [item] = listInstance.items;

    const itemTemplateElement = item.element;

    listInstance.clearItems();

    const newItems = leaders.map((item) => {
      return newLeaderCard(item, itemTemplateElement);
    });

    console.log(newItems);

    listInstance.addItems(newItems);
  },
]);

const newLeaderCard = (item, itemTemplateElement) => {
  const newItem = itemTemplateElement.cloneNode(true);

  /*userimage, username, strategy, link, percent, return, tags, chart*/

  const image = newItem.querySelector('[data-element="userimage"]');
  image.src = `https://api.collective2.com/images/c2/avatar_icons/p${item.developerUserID}_N-1.png`;
  image.srcset = `https://api.collective2.com/images/c2/avatar_icons/p${item.developerUserID}_N-1.png`;

  const username = newItem.querySelector('[data-element="username"]');
  username.innerText = item.pDeveloperAlias;

  const strategy = newItem.querySelector('[data-element="strategy"]');
  strategy.innerText = item.pSystemName;

  const link = newItem.querySelector('[data-element="link"]');
  link.href = "https://trade.collective2.eu/";

  const percent = newItem.querySelector('[data-element="percent"]');
  percent.innerText = item.NFAreturnnum + "%";

  const returns = newItem.querySelector('[data-element="return"]');
  returns.innerText = item.NFAreturnLabel + " since " + item.pSystemAdded;

  const tags = newItem.querySelector('[data-element="tags"]');
  tags.innerText = item.tradesWhat;

  const chart = newItem.querySelector('[data-element="chart"]');
  chart.src = `https://api.collective2.com/cgi-perl/minicharts.mpl?systemid=${item.systemid}&width=243&height=154&equityColor=FE9D18&bgColor=ffffff&hGridColor=ffffff&edgeColor=ffffff&forceHypoText=0`;

  console.log(newItem);
  return newItem;
};
