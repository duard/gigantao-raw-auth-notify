import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPACA', ['nucat', 'codagentecausador'], { unique: true })
@Entity('TFPACA', { schema: 'SANKHYA' })
export class TfpacaEntity {
  @Column('int', { primary: true, name: 'NUCAT' })
  nucat: number;

  @Column('varchar', { primary: true, name: 'CODAGENTECAUSADOR', length: 9 })
  codagentecausador: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpacas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
