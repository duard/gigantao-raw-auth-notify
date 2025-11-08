import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFINUJ', ['nunota'], { unique: true })
@Entity('TGFINUJ', { schema: 'SANKHYA' })
export class TgfinujEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('varchar', { name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('int', { name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('char', { name: 'ENTSAI', length: 1, default: () => "'S'" })
  entsai: string;

  @Column('varchar', { name: 'JUSTIFICATIVA', nullable: true, length: 255 })
  justificativa: string | null;

  @Column('char', { name: 'STATUSPROC', length: 1, default: () => "'A'" })
  statusproc: string;

  @Column('text', { name: 'OCORRENCIA', nullable: true })
  ocorrencia: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfinujs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfinujs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
