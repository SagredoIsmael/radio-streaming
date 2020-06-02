import * as React from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground, Platform } from 'react-native'
import { sizeNormalize } from '../constants/layout'

export default ({ navigate }) => {
  const isWeb = Platform.OS == 'web'

  return (
    <ImageBackground
      source={isWeb ? require("../../assets/images/background.jpg") : require("../../assets/images/backgroundMobile.jpg")}
      style={styles().container} >
      <ScrollView style={styles().scrollView} >
        <Text style={styles().textTitle}>
          Aviso legal y política de privacidad
       </Text>
        <Text style={styles(isWeb).textDescription}>
          {`\nObjeto social: CITRIKA FM es una emisora de radio destinada a la programación musical y entretenimiento.
        \n\nIdentificación: En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del comercio electrónico, los datos aquí consignados corresponden al titular del sitio web www.citrikafm.com
        \n\nDenominación: CITRIKA FM\nCIF: 70520515P\nTeléfono: 649 540 551\nEmail: info@citrikafm.com
        \n\nPropiedad intelectual e industrial: Los contenidos de este sitio, incluyendo los textos, imágenes y diseños gráficos, pertenecen única y exclusivamente a CITRIKA FM y su propietario, o a terceros que han autorizado su uso. CITRIKA FM presenta estos contenidos con fines de información y promoción, así como de entretenimiento. CITRIKA FM autoriza su utilización exclusivamente con estos fines. Cualquier uso de los textos, imágenes, diseños y contenidos deberá citarse de manera expresa su pertenencia a CITRIKA FM, quien se reserva el derecho a iniciar las acciones legales oportunas para reparar los daños y perjuicios causados por cualquier acto que vulnere sus derechos de propiedad intelectual o industrial.
        \n\nPropiedad intelectual de los contenidos: Los textos (informaciones, conceptos, publicidad, opiniones y otros) y los elementos gráficos (diseño, código fuente y análogos) que forman parte de las páginas webs y app de CITRIKA FM y son difundidos a CITRIKA FM y su titular, y tienen la consideración de obras protegidas de acuerdo con las disposiciones del Real decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de propiedad intelectual. También serán de aplicación los tratados internacionales suscritos en este campo.\nSin embargo, los usuarios pueden reproducir los contenidos de la página web y app con los fines exclusivos de almacenarlos, hacer copias de seguridad o imprimirlos en papel para uso estrictamente privado. Al margen de todo ello, queda prohibida cualquier reproducción, distribución, transformación, presentación, total o parcial, del contenido de las páginas webs y app de CITRIKA FM o de ninguno de sus elementos que los componen, de forma directa o indirecta, por redes telemáticas o soportes análogos, con fines comerciales con el público o para una utilización más allá de las mencionadas, incluso citando la fuente, siempre que no se disponga de la autorización expresa y por escrito de CITRIKA FM. La infracción de estos usos dará lugar al ejercicio de las acciones legales pertinentes por parte de CITRIKA FM contra el usuario. Igualmente, quedan prohibidas especialmente las acciones siguientes, sin el consentimiento expreso otorgado por escrito de CITRIKA FM: Todos los nombres comerciales, marcas o signos distintivos, logotipos y, en general, símbolos distintivos de cualquier naturaleza que aparezcan en esta página web y app son propiedad de CITRIKA FM y están protegidos por la legislación vigente aplicable.
        \n\nCondiciones de uso: El uso de este sitio web y app implica la aceptación plena de los términos del presente aviso legal. Los posibles conflictos relativos a esta web y app se regirán exclusivamente por el derecho del Reino de España. Toda persona usuaria de la web y app, independientemente de la jurisdicción territorial desde la que se produzca su acceso, acepta el cumplimiento y respeto de estas cláusulas con renuncia expresa a cualquier otro fuero que pudiera corresponderle. CITRIKA FM no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse del acceso a los contenidos, informaciones, publicidad, opiniones, conceptos e imágenes facilitados por los usuarios o terceros, o respecto de aquellos contenidos que sean contrarios a la ley, la moral, la buena fe y el orden público, que infrinjan derechos de propiedad intelectual o industrial o que contengan vicios, defectos o virus informáticos o rutina de software similar.\nCITRIKA FM queda exonerada de responsabilidades derivadas de daños y perjuicios de cualquier naturaleza derivados de la captación y el uso por parte de terceros de las informaciones, la publicidad y las opiniones facilitadas por los usuarios de las páginas webs y apps gestionadas por ella. En cualquier caso, CITRIKA FM no asume responsabilidades de las informaciones y los contenidos ajenos a las páginas webs y apps que no sean gestionadas por ella misma y sean de terceros. CITRIKA FM no puede asegurar la inexistencia de interrupciones, cortes o errores en el acceso a este sitio web y app, aunque se pondrá todo el empeño para que esto no suceda.
        \n\nPolítica de Protección de Datos: En cumplimiento de REGLAMENTO (UE) 2016/679 del Parlamento Europeo y DEL CONSEJO de 27 de Abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales ya la libre circulación de estos datos y la su normativa de desarrollo, le informamos que los datos personales proporcionados por usted serán tratados con el fin de facilitarle la información que nos haya solicitado sobre nuestra actividad y / o servicios y dar respuesta a las consultas que nos haya hecho llegar. Mediante el envío de correos electrónicos, mensajes de whatapp, sms o cualquier otro tipo de solicitud de información enviada a CITRIKA FM, el interesado presta su consentimiento de forma expresa para el tratamiento de sus datos personales con las finalidades expuestas anteriormente. Recomendamos al usuario consultar la Política de Privacidad de Whatsapp.\nEn ningún caso CITRIKA FM utilizará datos personales de los interesados para causas diferentes de las descritas anteriormente, ni los comunicará a terceros sin el consentimiento previo y expreso del afectado. CITRIKA FM se compromete a guardar secreto profesional y establecer las medidas técnicas y organizativas necesarias para salvaguardar la información de acuerdo con los requerimientos establecidos en el llamado Reglamento. Sus datos se conservarán en nuestros registros mientras sea necesario, para atender sus consultas o peticiones. Sin embargo, en cualquier momento usted puede solicitar el acceso a sus datos personales y su rectificación o cancelación, así como limitar su tratamiento o directamente oponerse o ejercer el derecho a la portabilidad de las mismas. También informamos del derecho a presentar una reclamación ante la Agencia Española de Protección de Datos, en caso de que considere que en el tratamiento de sus datos no se está respetando sus derechos.
        \n\nPolítica de protección de menores: Quien facilita sus datos a través del correo electrónico o los espacios habilitados para tal efecto en esta página web y app, acepta su tratamiento y declara formalmente tener más de 14 años. Por tanto, está totalmente prohibido el acceso y el uso de esta página por parte de personas menores de 14 años de edad. CITRIKA FM recuerda a las personas mayores de edad que tengan menores a su cargo, que será su exclusiva responsabilidad por su parte, si algún menor incorpora sus datos a los sistemas para solicitar algún servicio.
        \n\nRedes sociales: Al seguir cualquiera de nuestros perfiles en las redes sociales, da su consentimiento expreso al tratamiento de sus datos personales de acuerdo con su política de privacidad. También presta su consentimiento expreso a CITRIKA FM para el tratamiento de sus datos contenidos en el listado de amigos, y a que las noticias que publicamos referentes a nuestra actividad, actos o eventos aparezcan en su muro. Conforme al REGLAMENTO (UE) 2016/679 del Parlamento Europeo, le informamos que los datos personales de los seguidores de CITRIKA FM en las redes sociales, serán incorporados a un fichero cuyo responsable es CITRIKA FM, con el fin que se detalla. Su petición para conectar, implica necesariamente, su consentimiento para realizar los tratamientos señalados. Los comentarios y contenidos publicados en las redes sociales se convertirán en información de carácter público visible, por lo que los usuarios deberán poner especial atención cuando decidan compartir su información personal. CITRIKA FM no se hace responsable de la información que los usuarios incorporen a la página y app. Sin embargo, las personas cuyos datos estén publicadas o incluidas en comentarios, podrán solicitar a CITRIKA FM su eliminación inmediata. En cualquier momento, usted puede ejercitar los derechos de acceso, rectificación, supresión, oposición y limitación del tratamiento de sus datos personales. Todo ello, mediante escrito, acompañado de copia de documento oficial que le identifique, dirigido al mail de CITRIKA FM; info@citrikafm.com, en caso de disconformidad con el tratamiento, también tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos.
        \n\nEnlaces a otras webs y apps: Los enlaces (links) externos que pueda encontrar en esta web y app son un servicio para los usuarios. Estas páginas no son gestionadas ni controladas por CITRIKA FM, por este motivo, CITRIKA FM no se hace responsable de los contenidos de estos sitios webs o apps, ni éstos están regulados por el presente Aviso Legal. Si accede a estas páginas webs o apps deberá tener en cuenta que sus políticas de privacidad pueden ser diferentes a la nuestra.
        \n\nLegislación aplicable y competencia jurisdiccional: El presente Aviso Legal se rige por la normativa del Reino de España vigente que le es de aplicación. Para la resolución de las controversias que pudieran derivarse como consecuencia de lo establecido en las presentes disposiciones, y sobre su interpretación, aplicación y cumplimiento, el usuario, en virtud de la aceptación de las condiciones recogidas en este Aviso legal, renuncia expresamente a cualquier otro fuero que pudiera corresponderle. En cualquier caso, dentro de la jurisdicción española, si la legislación permitiera someterse a un fuero concreto, el usuario renuncia expresamente al fuero que le pudiera corresponder y se somete voluntariamente a la jurisdicción de los Juzgados y Tribunales de Madrid.
`}
        </Text>
      </ScrollView>
    </ImageBackground>
  )
}



const styles = (isWeb) => StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
  },
  textDescription: {
    flex: 1,
    marginRight: isWeb? '30%' : '10%',
    marginLeft: isWeb? '30%' : '10%',
    color: 'white',
    fontSize: sizeNormalize(16),

  },
  textTitle: {
    flex: 1,
    margin:'5%',
    marginBottom: '0%',
    color: 'white',
    fontSize: sizeNormalize(26),
    fontWeight: "bold",
    textAlign: 'center'
  }
})
