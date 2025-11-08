import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcesEntity } from './tGFCES.entity';

@Index('PK_TGFRNE', ['nuest', 'nuinstanciapai', 'nuinstanciafilha'], {
  unique: true,
})
@Entity('TGFRNE', { schema: 'SANKHYA' })
export class TgfrneEntity {
  @Column('int', { primary: true, name: 'NUEST' })
  nuest: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTANCIAPAI',
    precision: 10,
    scale: 0,
  })
  nuinstanciapai: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTANCIAFILHA',
    precision: 10,
    scale: 0,
  })
  nuinstanciafilha: number;

  @ManyToOne(() => TgfcesEntity, (tgfcesEntity) => tgfcesEntity.tgfrnes)
  @JoinColumn([{ name: 'NUEST', referencedColumnName: 'nuest' }])
  nuest2: TgfcesEntity;
}
