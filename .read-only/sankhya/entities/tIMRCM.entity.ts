import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimpipEntity } from './tIMPIP.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimrecEntity } from './tIMREC.entity';
import { TimhcbEntity } from './tIMHCB.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('IDX_TIMRCM01', ['rcmfindesp'], {})
@Index('IDX_TIMRCM02', ['rcmnufinorigem'], {})
@Index('IDX_TIMRCM03', ['rcmnufinorigem', 'rcmdtlorigem'], {})
@Index('PK_TIMRCM', ['rcmrescisao', 'rcmcodigo'], { unique: true })
@Entity('TIMRCM', { schema: 'SANKHYA' })
export class TimrcmEntity {
  @Column('int', { primary: true, name: 'RCMRESCISAO' })
  rcmrescisao: number;

  @Column('int', { primary: true, name: 'RCMCODIGO' })
  rcmcodigo: number;

  @Column('varchar', { name: 'RCMREPASSAPARA', length: 10 })
  rcmrepassapara: string;

  @Column('float', { name: 'RCMVALOR', precision: 53 })
  rcmvalor: number;

  @Column('varchar', { name: 'RCMCOMPLEMENTO', nullable: true, length: 100 })
  rcmcomplemento: string | null;

  @Column('datetime', { name: 'RCMDTINICIO', nullable: true })
  rcmdtinicio: Date | null;

  @Column('datetime', { name: 'RCMDTFIM', nullable: true })
  rcmdtfim: Date | null;

  @Column('varchar', { name: 'RCMRECEBEDE', nullable: true, length: 10 })
  rcmrecebede: string | null;

  @Column('varchar', { name: 'RCMGERADESP', nullable: true, length: 10 })
  rcmgeradesp: string | null;

  @Column('datetime', { name: 'RCMDTVENCDESP', nullable: true })
  rcmdtvencdesp: Date | null;

  @Column('varchar', { name: 'RCMGERAALUG', nullable: true, length: 10 })
  rcmgeraalug: string | null;

  @Column('int', { name: 'RCMFINDESP', nullable: true })
  rcmfindesp: number | null;

  @Column('int', { name: 'RCMNUFINORIGEM', nullable: true })
  rcmnufinorigem: number | null;

  @Column('char', { name: 'RCMORIGEMDESPESA', nullable: true, length: 1 })
  rcmorigemdespesa: string | null;

  @Column('int', { name: 'RCMDTLORIGEM', nullable: true })
  rcmdtlorigem: number | null;

  @ManyToOne(() => TimpipEntity, (timpipEntity) => timpipEntity.timrcms)
  @JoinColumn([
    { name: 'RCMCODIPTU', referencedColumnName: 'pipiptu' },
    { name: 'RCMIMOVEL', referencedColumnName: 'pipimovel' },
    { name: 'RCMPARCELAIPTU', referencedColumnName: 'pipcodigo' },
  ])
  timpip: TimpipEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timrcms)
  @JoinColumn([{ name: 'RCMFINDESP', referencedColumnName: 'nufin' }])
  rcmfindesp2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timrcms2)
  @JoinColumn([{ name: 'RCMNUFINORIGEM', referencedColumnName: 'nufin' }])
  rcmnufinorigem2: TgffinEntity;

  @ManyToOne(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timrcms)
  @JoinColumn([
    { name: 'RCMNUFINORIGEM', referencedColumnName: 'dtlparcela' },
    { name: 'RCMDTLORIGEM', referencedColumnName: 'dtlcodigo' },
  ])
  timdtl: TimdtlEntity;

  @ManyToOne(() => TimrecEntity, (timrecEntity) => timrecEntity.timrcms)
  @JoinColumn([{ name: 'RCMRESCISAO', referencedColumnName: 'reccodigo' }])
  rcmrescisao2: TimrecEntity;

  @ManyToOne(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.timrcms)
  @JoinColumn([{ name: 'RCMHISTORICO', referencedColumnName: 'hcbcodigo' }])
  rcmhistorico: TimhcbEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timrcms)
  @JoinColumn([{ name: 'RCMPARCDESP', referencedColumnName: 'codparc' }])
  rcmparcdesp: TgfparEntity;
}
