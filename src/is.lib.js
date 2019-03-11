class Is {

  defined(v){
    return typeof v !== 'undefined'
  }

  boolean(v){
    return typeof v === 'boolean'
  }

  number(v){
    return typeof v === 'number'
  }

  null(v){
    return v === null
  }

  array(v){
    return v.constructor === [].constructor
  }

  object(v){
    return v.constructor === {}.constructor
  }

  property(prop){
    return {
      of: obj => obj.hasOwnProperty(prop)
    }
  }

  greater(variable){
    return {
      than: variable2 => variable > variable2
    }
  }

  smaller(variable){
    return {
      than: variable2 => variable < variable2
    }
  }

  equal(variable){
    return {
      and: variable2 => variable === variable2
    }
  }

}
