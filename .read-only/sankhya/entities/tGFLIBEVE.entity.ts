import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdAdevlibfluxoEntity } from './aD_ADEVLIBFLUXO.entity';

@Index('PK_TGFLIBEVE', ['nuevento'], { unique: true })
@Entity('TGFLIBEVE', { schema: 'SANKHYA' })
export class TgflibeveEntity {
  @Column('int', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @OneToMany(
    () => AdAdevlibfluxoEntity,
    (adAdevlibfluxoEntity) => adAdevlibfluxoEntity.nuevento,
  )
  adAdevlibfluxos: AdAdevlibfluxoEntity[];
}
