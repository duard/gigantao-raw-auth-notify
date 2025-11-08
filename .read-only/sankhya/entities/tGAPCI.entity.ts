import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgacliEntity } from './tGACLI.entity';

@Index('PK_TGAPCI', ['codint', 'codclt', 'codclc'], { unique: true })
@Entity('TGAPCI', { schema: 'SANKHYA' })
export class TgapciEntity {
  @Column('int', { primary: true, name: 'CODINT' })
  codint: number;

  @Column('int', { primary: true, name: 'CODCLT' })
  codclt: number;

  @Column('int', { primary: true, name: 'CODCLC' })
  codclc: number;

  @Column('float', { name: 'VALMIN', nullable: true, precision: 53 })
  valmin: number | null;

  @Column('float', { name: 'VALMAX', nullable: true, precision: 53 })
  valmax: number | null;

  @Column('float', { name: 'VALDESC', nullable: true, precision: 53 })
  valdesc: number | null;

  @Column('char', { name: 'EXIBLIB', length: 1, default: () => "'N'" })
  exiblib: string;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @ManyToOne(() => TgacliEntity, (tgacliEntity) => tgacliEntity.tgapcis)
  @JoinColumn([
    { name: 'CODCLT', referencedColumnName: 'codclt' },
    { name: 'CODCLC', referencedColumnName: 'codclc' },
  ])
  tgacli: TgacliEntity;
}
