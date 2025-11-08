import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprformEntity } from './tPRFORM.entity';

@Index('PK_TPRFPA', ['idproc', 'idform', 'codprodpa', 'controlepa'], {
  unique: true,
})
@Entity('TPRFPA', { schema: 'SANKHYA' })
export class TprfpaEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { primary: true, name: 'IDFORM' })
  idform: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @ManyToOne(() => TprformEntity, (tprformEntity) => tprformEntity.tprfpas)
  @JoinColumn([{ name: 'IDFORM', referencedColumnName: 'idform' }])
  idform2: TprformEntity;
}
