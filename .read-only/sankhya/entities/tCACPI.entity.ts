import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TcacprEntity } from './tCACPR.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TCACPI', ['nucurso', 'codnat', 'codparc'], { unique: true })
@Entity('TCACPI', { schema: 'SANKHYA' })
export class TcacpiEntity {
  @Column('int', { primary: true, name: 'NUCURSO' })
  nucurso: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('money', { name: 'PRECOUNIT' })
  precounit: number;

  @Column('money', { name: 'PRECOTOTAL' })
  precototal: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'MULTHORAS', nullable: true, length: 1 })
  multhoras: string | null;

  @Column('char', { name: 'MULTHORASSALA', nullable: true, length: 1 })
  multhorassala: string | null;

  @Column('char', { name: 'MULTDIAS', nullable: true, length: 1 })
  multdias: string | null;

  @Column('char', { name: 'MULTPERIODOS', nullable: true, length: 1 })
  multperiodos: string | null;

  @Column('char', { name: 'MULTTURMAS', nullable: true, length: 1 })
  multturmas: string | null;

  @Column('char', { name: 'MULTPARTICIPANTES', nullable: true, length: 1 })
  multparticipantes: string | null;

  @Column('char', { name: 'MULTCONSULTORES', nullable: true, length: 1 })
  multconsultores: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcacpis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TcacprEntity, (tcacprEntity) => tcacprEntity.tcacpis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCURSO', referencedColumnName: 'nucurso' }])
  nucurso2: TcacprEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcacpis)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
