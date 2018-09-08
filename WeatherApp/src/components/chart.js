import * as _ from 'lodash';
import React from 'react'
import {Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return(
        <div>
            <Sparklines data={props.data} height={20} width={150}>
                    <SparklinesLine color={props.color} style={{ fill: "none" }} />
                     <SparklinesBars/>
                     <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}