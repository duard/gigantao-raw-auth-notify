import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppreEntity } from './tFPPRE.entity';

@Index('PK_TFPSEQ', ['codpref', 'codevento'], { unique: true })
@Entity('TFPSEQ', { schema: 'SANKHYA' })
export class TfpseqEntity {
  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { name: 'SEQUENCIA', default: () => '(1)' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpseqs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpseqs)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref2: TfppreEntity;
}
