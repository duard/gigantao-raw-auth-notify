import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimcilEntity } from './tIMCIL.entity';

@Index('PK_TIMCIP', ['cipcodigo'], { unique: true })
@Entity('TIMCIP', { schema: 'SANKHYA' })
export class TimcipEntity {
  @Column('int', { primary: true, name: 'CIPCODIGO' })
  cipcodigo: number;

  @Column('varchar', { name: 'CIPREGISTRO', length: 30 })
  cipregistro: string;

  @Column('smallint', { name: 'CIPPARCELA' })
  cipparcela: number;

  @Column('datetime', { name: 'CIPVENCIMENTO' })
  cipvencimento: Date;

  @Column('float', { name: 'CIPVLORIGEM', precision: 53 })
  cipvlorigem: number;

  @Column('datetime', { name: 'CIPPAGAMENTO', nullable: true })
  cippagamento: Date | null;

  @Column('float', { name: 'CIPVLPAGO', nullable: true, precision: 53 })
  cipvlpago: number | null;

  @Column('datetime', { name: 'CIPREFINICIO', nullable: true })
  ciprefinicio: Date | null;

  @Column('datetime', { name: 'CIPREFFINAL', nullable: true })
  cipreffinal: Date | null;

  @Column('float', { name: 'CIPVLEXPEDIENTE', nullable: true, precision: 53 })
  cipvlexpediente: number | null;

  @Column('char', { name: 'CIPLEGADO', nullable: true, length: 1 })
  ciplegado: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timcips)
  @JoinColumn([{ name: 'CIPNUFIN', referencedColumnName: 'nufin' }])
  cipnufin: TgffinEntity;

  @ManyToOne(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timcips)
  @JoinColumn([
    { name: 'CIPNUFIN', referencedColumnName: 'dtlparcela' },
    { name: 'CIPDETALHAMENTO', referencedColumnName: 'dtlcodigo' },
  ])
  timdtl: TimdtlEntity;

  @ManyToOne(() => TimcilEntity, (timcilEntity) => timcilEntity.timcips)
  @JoinColumn([
    { name: 'CIPCODCIL', referencedColumnName: 'cilcodigo' },
    { name: 'CIPIMOVEL', referencedColumnName: 'cilimovel' },
  ])
  timcil: TimcilEntity;
}
