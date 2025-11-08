import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK__TGWRUMA__0FC831F5EFE4E48F', ['idpalete'], { unique: true })
@Index('UQ__TGWRUMA__C5B1378973BDF20B', ['uma'], { unique: true })
@Entity('TGWRUMA', { schema: 'SANKHYA' })
export class TgwrumaEntity {
  @Column('int', { primary: true, name: 'IDPALETE' })
  idpalete: number;

  @Column('datetime', { name: 'DTREGISTRO', nullable: true })
  dtregistro: Date | null;

  @Column('varchar', {
    name: 'TIPO',
    nullable: true,
    length: 6,
    default: () => "'UMA'",
  })
  tipo: string | null;

  @Column('char', {
    name: 'UMAAUTOMATICA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  umaautomatica: string | null;

  @Column('varchar', { name: 'UMA', nullable: true, unique: true, length: 30 })
  uma: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwrumas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
