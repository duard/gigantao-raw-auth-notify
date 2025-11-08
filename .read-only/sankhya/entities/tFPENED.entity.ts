import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPENED', ['codemp', 'codened'], { unique: true })
@Entity('TFPENED', { schema: 'SANKHYA' })
export class TfpenedEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODENED' })
  codened: number;

  @Column('varchar', { name: 'NOMEENED', nullable: true, length: 100 })
  nomeened: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpeneds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpeneds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
