
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '爆肝寫code', '拚一下side-project'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['超簡單', '超容易', '超快', '超正常', '超級爽', '沒毛病', '有點抖']


const occupation = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}

function RandomArray(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(person) {
  if (!person) return `請選擇職業`
  const trashTalk = `身為${occupation[person]}，${RandomArray(task[person])}${RandomArray(phrase)}`
  return trashTalk
}

module.exports = generateTrashTalk