import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGAPAT', ['nureg'], { unique: true })
@Index('TGAPAT_I01', ['tipo', 'codveiculo', 'dhsaida'], {})
@Entity('TGAPAT', { schema: 'SANKHYA' })
export class TgapatEntity {
  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { name: 'CARGADESCARGA', length: 1 })
  cargadescarga: string;

  @Column('int', { name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('float', { name: 'UMIDADE', nullable: true, precision: 53 })
  umidade: number | null;

  @Column('datetime', { name: 'DHENTRADA', nullable: true })
  dhentrada: Date | null;

  @Column('int', { name: 'KMENTRADA', nullable: true })
  kmentrada: number | null;

  @Column('datetime', { name: 'DHSAIDA', nullable: true })
  dhsaida: Date | null;

  @Column('int', { name: 'KMSAIDA', nullable: true })
  kmsaida: number | null;

  @Column('char', { name: 'PLACA', nullable: true, length: 10 })
  placa: string | null;

  @Column('char', { name: 'NOMEMOTORISTA', nullable: true, length: 60 })
  nomemotorista: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DHCHEGADA', nullable: true })
  dhchegada: Date | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgapats)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgapats2)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgapats)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgapats)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgapats)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgapats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
