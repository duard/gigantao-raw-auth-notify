import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TimclaEntity } from './tIMCLA.entity';

@Index('PK_TIMRCL', ['rclcontrato', 'rclidentificador'], { unique: true })
@Entity('TIMRCL', { schema: 'SANKHYA' })
export class TimrclEntity {
  @Column('int', { primary: true, name: 'RCLCONTRATO' })
  rclcontrato: number;

  @Column('char', { name: 'RCLPESSOA', length: 2 })
  rclpessoa: string;

  @Column('char', { name: 'RCLORIGEM', length: 2, default: () => "'RE'" })
  rclorigem: string;

  @Column('char', { name: 'RCLAPLICARSOBRE', length: 2 })
  rclaplicarsobre: string;

  @Column('float', { name: 'RCLPERCENTUAL', nullable: true, precision: 53 })
  rclpercentual: number | null;

  @Column('float', { name: 'RCLVALOR', nullable: true, precision: 53 })
  rclvalor: number | null;

  @Column('smallint', { primary: true, name: 'RCLIDENTIFICADOR' })
  rclidentificador: number;

  @Column('datetime', { name: 'RCLDTPREVISTO', nullable: true })
  rcldtprevisto: Date | null;

  @Column('datetime', { name: 'RCLDTPAGAMENTO', nullable: true })
  rcldtpagamento: Date | null;

  @Column('varchar', { name: 'RTEXTSERVACAO', nullable: true, length: 2000 })
  rtextservacao: string | null;

  @Column('varchar', { name: 'RCLOBSERVACAO', nullable: true, length: 2000 })
  rclobservacao: string | null;

  @Column('char', { name: 'RCLLEGADO', nullable: true, length: 1 })
  rcllegado: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timrcls)
  @JoinColumn([{ name: 'RCLEMITENTE', referencedColumnName: 'codparc' }])
  rclemitente: TgfparEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timrcls)
  @JoinColumn([{ name: 'RCLCORRETOR', referencedColumnName: 'corcodigo' }])
  rclcorretor: TimcorEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.timrcls)
  @JoinColumn([{ name: 'RCLNOTAFISCAL', referencedColumnName: 'nunota' }])
  rclnotafiscal: TgfcabEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timrcls)
  @JoinColumn([{ name: 'RCLCONTRATO', referencedColumnName: 'clacodigo' }])
  rclcontrato2: TimclaEntity;
}
