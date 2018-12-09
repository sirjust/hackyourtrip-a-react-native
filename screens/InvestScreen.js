import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Content, H1, H2, H3 } from 'native-base';

import SmallCards from '../components/SmallCards';
import MediumCards from '../components/MediumCards'

class InvestScreen extends Component {
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>

        <H1>Appointments</H1>
        <ScrollView horizontal>
          <TouchableOpacity>
            <SmallCards
                profileImage={'https://www.arabiaweddings.com/sites/default/files/styles/400x400/public/companies/images/2017/01/pretty_lady_salon.jpg?itok=SO3sJT37'}
                title={'Project'}
                subTitle={'Sub Title'}
                date={'12/8/18 5:00 pm'}
            />
          </TouchableOpacity>

        </ScrollView>

          <H1>Investmenst</H1>
          <ScrollView horizontal>
              <TouchableOpacity>
                  <MediumCards profileImage={"https://res.cloudinary.com/somekindofidea/image/upload/v1544331451/david-wood-shed_kumeu9.jpg"}
                               projectTitle={'Sweet Project'}
                               fundedDate={'April 15, 2016'}
                               projectImage={"https://images.techhive.com/images/article/2016/11/computerworld_tech_forecast_2017_hottest-tech-skills-for-2017-100692085-large.jpg"}
                               summary={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi exercitationem placeat repellendus. Corporis dignissimos dolorem earum fugiat inventore iste magni maxime, minus officia qui recusandae."}
                  />
              </TouchableOpacity>

          </ScrollView>
      </View>
        </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InvestScreen;
