import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFMTEF', ['idmtef'], { unique: true })
@Entity('TGFMTEF', { schema: 'SANKHYA' })
export class TgfmtefEntity {
  @Column('smallint', { primary: true, name: 'IDMTEF' })
  idmtef: number;

  @Column('varchar', { name: 'GATEWAY', nullable: true, length: 10 })
  gateway: string | null;

  @Column('char', { name: 'DESFAZIMENTO', nullable: true, length: 1 })
  desfazimento: string | null;

  @Column('char', { name: 'CONFIRMACAO', nullable: true, length: 1 })
  confirmacao: string | null;

  @Column('text', { name: 'RESPONSE', nullable: true })
  response: string | null;

  @Column('text', { name: 'REQUEST', nullable: true })
  request: string | null;

  @Column('varchar', { name: 'NUMNSU', nullable: true, length: 15 })
  numnsu: string | null;

  @Column('char', { name: 'OPERACAO', nullable: true, length: 1 })
  operacao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'NT_USERNAME', nullable: true, length: 30 })
  ntUsername: string | null;

  @Column('varchar', { name: 'HOSTNAME', nullable: true, length: 64 })
  hostname: string | null;

  @Column('varchar', { name: 'PROGRAMA', nullable: true, length: 80 })
  programa: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmtefs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
