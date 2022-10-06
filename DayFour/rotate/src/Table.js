import React from 'react';

const nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];


class Table extends React.Component {


    click() {
        nums.unshift(nums.pop());
        for (let i = 0; i <= 7; i += 1) {
            document.getElementById(`b${ids[i]}`).innerHTML = nums[i];
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td id="b1">1</td>
                        <td id="b2">2</td>
                        <td id="b3">3</td>
                    </tr>
                    <tr>
                        <td id="b4">4</td>
                        <td id="b5"><button onClick={this.click}>5</button></td>
                        <td id="b6">6</td>
                    </tr>
                    <tr>
                        <td id="b7">7</td>
                        <td id="b8">8</td>
                        <td id="b9">9</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;
