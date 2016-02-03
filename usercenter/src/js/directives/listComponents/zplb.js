export default function zplb() {
  return {
    replace: true,
    template: function(elem, attrs) {
      return `
        <tr>
          <td>{{item.position}}</td>
          <td>{{item.company}}</td>
          <td>{{item.money}}</td>
          <td>{{item.tdcgsj}}</td>
          <td>{{item.tdzt}}</td>
          <td>{{item.qysfck}}</td>
        </tr>
      `;
    }
  };
}