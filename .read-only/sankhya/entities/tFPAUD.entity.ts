import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpaudaviEntity } from './tFPAUDAVI.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPAUD', ['codemp', 'dtref', 'chave', 'codaviso', 'codusu'], {
  unique: true,
})
@Entity('TFPAUD', { schema: 'SANKHYA' })
export class TfpaudEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('smallint', { primary: true, name: 'CODAVISO' })
  codaviso: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'CODEVENTO', length: 10 })
  codevento: string;

  @Column('text', { name: 'INFOAVISO', nullable: true })
  infoaviso: string | null;

  @Column('text', { name: 'INFOPESQ', nullable: true })
  infopesq: string | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 50 })
  grupo: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpauds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(
    () => TfpaudaviEntity,
    (tfpaudaviEntity) => tfpaudaviEntity.tfpauds,
  )
  @JoinColumn([{ name: 'CODAVISO', referencedColumnName: 'codaviso' }])
  codaviso2: TfpaudaviEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpauds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
