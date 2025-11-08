import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfpixEntity } from './tGFPIX.entity';

@Index('PK_TGFPIXTEF', ['seqpixtef'], { unique: true })
@Entity('TGFPIXTEF', { schema: 'SANKHYA' })
export class TgfpixtefEntity {
  @Column('int', { primary: true, name: 'SEQPIXTEF' })
  seqpixtef: number;

  @Column('int', { name: 'IDENTIFICACAO' })
  identificacao: number;

  @Column('int', { name: 'OPERACAO', nullable: true })
  operacao: number | null;

  @Column('varchar', { name: 'GATEWAY', nullable: true, length: 10 })
  gateway: string | null;

  @Column('varchar', { name: 'HOSTNAME', nullable: true, length: 30 })
  hostname: string | null;

  @Column('varchar', { name: 'NSU', nullable: true, length: 20 })
  nsu: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('text', { name: 'CUPOM', nullable: true })
  cupom: string | null;

  @Column('text', { name: 'CUPOMESTABELECIMENTO', nullable: true })
  cupomestabelecimento: string | null;

  @Column('text', { name: 'CUPOMCLIENTE', nullable: true })
  cupomcliente: string | null;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.pixtef)
  tgffins: TgffinEntity[];

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfpixtefs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(() => TgfpixEntity, (tgfpixEntity) => tgfpixEntity.tgfpixtefs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'SEQPIX', referencedColumnName: 'seqpix' }])
  seqpix: TgfpixEntity;
}
