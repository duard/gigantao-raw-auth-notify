import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSIPVI__CBD1133BC4E15EFD', ['codusu'], { unique: true })
@Entity('TSIPVI', { schema: 'SANKHYA' })
export class TsipviEntity {
  @Column('numeric', { primary: true, name: 'CODUSU', precision: 5, scale: 0 })
  codusu: number;

  @Column('int', { name: 'CONFIG', nullable: true })
  config: number | null;
}
