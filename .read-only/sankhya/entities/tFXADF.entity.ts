import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TFXADF', ['nuajuste'], { unique: true })
@Entity('TFXADF', { schema: 'SANKHYA' })
export class TfxadfEntity {
  @Column('int', { primary: true, name: 'NUAJUSTE' })
  nuajuste: number;

  @Column('datetime', { name: 'DHIMPORT', nullable: true })
  dhimport: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('int', { name: 'SEQVDA', nullable: true })
  seqvda: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('float', { name: 'VLRVENDA', nullable: true, precision: 53 })
  vlrvenda: number | null;

  @Column('varchar', { name: 'EXCCAN', length: 1, default: () => "'N'" })
  exccan: string;

  @Column('varchar', { name: 'EXCINU', length: 1, default: () => "'N'" })
  excinu: string;

  @Column('varchar', { name: 'EXCXML', length: 1, default: () => "'N'" })
  excxml: string;

  @Column('varchar', { name: 'INCCAN', length: 1, default: () => "'N'" })
  inccan: string;

  @Column('varchar', { name: 'INCINU', length: 1, default: () => "'N'" })
  incinu: string;

  @Column('varchar', { name: 'INCXML', length: 1, default: () => "'N'" })
  incxml: string;

  @Column('varchar', { name: 'INCNOTA', length: 1, default: () => "'N'" })
  incnota: string;

  @Column('varchar', { name: 'MOTIVOCAN', nullable: true, length: 255 })
  motivocan: string | null;

  @Column('varchar', { name: 'NUMPROTOCCAN', nullable: true, length: 15 })
  numprotoccan: string | null;

  @Column('datetime', { name: 'DHPROTOCCAN', nullable: true })
  dhprotoccan: Date | null;

  @Column('varchar', { name: 'MOTIVOINU', nullable: true, length: 255 })
  motivoinu: string | null;

  @Column('varchar', { name: 'NUMPROTOCINU', nullable: true, length: 15 })
  numprotocinu: string | null;

  @Column('datetime', { name: 'DHPROTOCINU', nullable: true })
  dhprotocinu: Date | null;

  @Column('text', { name: 'ARQUIVO', nullable: true })
  arquivo: string | null;

  @Column('varchar', { name: 'ERRO', nullable: true, length: 255 })
  erro: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfxadfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
