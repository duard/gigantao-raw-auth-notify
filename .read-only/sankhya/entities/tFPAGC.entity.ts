import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPAGC', ['codagentecausador'], { unique: true })
@Entity('TFPAGC', { schema: 'SANKHYA' })
export class TfpagcEntity {
  @Column('int', { primary: true, name: 'CODAGENTECAUSADOR' })
  codagentecausador: number;

  @Column('varchar', { name: 'DESCRAGENTECAUSADOR', length: 250 })
  descragentecausador: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpagcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
