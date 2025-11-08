import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPREL', ['codemp', 'nomerel', 'referencia'], { unique: true })
@Entity('TFPREL', { schema: 'SANKHYA' })
export class TfprelEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'NOMEREL', length: 20 })
  nomerel: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('text', { name: 'IMPRESSAO', nullable: true })
  impressao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfprels)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprels)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
